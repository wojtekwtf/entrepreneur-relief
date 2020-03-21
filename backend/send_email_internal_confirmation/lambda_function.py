import json
import os
import random
import string

import requests


def _send_email(
    mailgun_api_url, mailgun_api_key, mailgun_postmaster_mail, receiver, subject, body
):
    return requests.post(
        mailgun_api_url,
        auth=("api", mailgun_api_key),
        data={
            "from": f"Mailgun Sandbox <{mailgun_postmaster_mail}>",
            "to": receiver,
            "subject": subject,
            "text": body,
        },
    )


def _generate_random_subject(len=15):
    """Random subject stops Gmail from grouping the mail with previous ones."""
    return f"PURCHASE CONFIRMATION ({''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(len))})"


def lambda_handler(event, context):
    mailgun_api_key = os.environ["MAILGUN_API_KEY"]
    mailgun_user_mail = os.environ["MAILGUN_USER_MAIL"]
    mailgun_api_url = os.environ["MAILGUN_API_URL"]
    mailgun_postmaster_mail = os.environ["MAILGUN_POSTMASTER_MAIL"]

    try:
        params = event["queryStringParameters"]
        product = params["product"]
        business = params["business"]
        price = params["price"]
        body = f"Somebody has just bought: {product} from: {business} (price: {price} zł)."
        response = _send_email(
            mailgun_api_url,
            mailgun_api_key,
            mailgun_postmaster_mail,
            receiver=mailgun_user_mail,
            subject=_generate_random_subject(),
            body=body,
        )
    except KeyError:
        response = _send_email(
            mailgun_api_url,
            mailgun_api_key,
            mailgun_postmaster_mail,
            receiver=mailgun_user_mail,
            subject="FAILED [internal confirmation]",
            body="sth went wrong with extracting the parameters (one or more missing? wrong format?)",
        )

    return {"statusCode": 200, "body": json.dumps(response.text)}

