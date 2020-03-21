import json
import os
import random
import string

import boto3
import requests

s3 = boto3.resource("s3")


def _send_email(
    mailgun_api_url,
    mailgun_api_key,
    mailgun_postmaster_mail,
    receiver,
    subject,
    body,
    s3_bucket_name,
    s3_file_key,
):
    file_body = s3.Object(s3_bucket_name, s3_file_key).get()["Body"].read()
    return requests.post(
        mailgun_api_url,
        auth=("api", mailgun_api_key),
        files=[("attachment", ("voucher.pdf", file_body))],
        data={
            "from": f"Mailgun Sandbox <{mailgun_postmaster_mail}>",
            "to": receiver,
            "subject": subject,
            "text": body,
        },
    )


def _generate_random_subject(len=32):
    """Random subject stops Gmail from grouping the mail with previous ones."""
    return "".join(
        random.choice(string.ascii_uppercase + string.digits) for _ in range(len)
    )


def lambda_handler(event, context):
    mailgun_api_key = os.environ["MAILGUN_API_KEY"]
    mailgun_user_mail = os.environ["MAILGUN_USER_MAIL"]
    mailgun_api_url = os.environ["MAILGUN_API_URL"]
    mailgun_postmaster_mail = os.environ["MAILGUN_POSTMASTER_MAIL"]
    s3_bucket_name = os.environ["S3_BUCKET_NAME"]
    s3_file_key = os.environ["S3_FILE_KEY"]

    try:
        params = event["queryStringParameters"]
        mail_to = params["email"]
        product = params["product"]
        business = params["business"]
        price = params["price"]
        body = f"[{mail_to}] Hi, you've just bought a voucher for: {product}. You've helped {business} with {price} zł! Thank you!"
        response = _send_email(
            mailgun_api_url,
            mailgun_api_key,
            mailgun_postmaster_mail,
            receiver=mailgun_user_mail,
            subject=_generate_random_subject(),
            body=body,
            s3_bucket_name=s3_bucket_name,
            s3_file_key=s3_file_key,
        )
    except KeyError:
        response = _send_email(
            mailgun_api_url,
            mailgun_api_key,
            mailgun_postmaster_mail,
            receiver=mailgun_user_mail,
            subject="FAILED [sending email to client]",
            body="sth went wrong with extracting the parameters (one or more missing? wrong format?)",
            s3_bucket_name=s3_bucket_name,
            s3_file_key=s3_file_key,
        )

    return {"statusCode": 200, "body": json.dumps(response.text)}

