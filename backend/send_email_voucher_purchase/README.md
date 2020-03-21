AWS Lambda function to send voucher purchase confirmation emails
===========================================================================

Serverless function that sends emails with confirmation of purchasing a voucher to the given email. An attachment
is sent also - a PDF file with the voucher. The file should be stored in S3 with the function having
permissions to read it.


### Usage

Lambda is triggered by an API Event (sending a request to a configured API endpoint). 

API type: HTTP

Authorization: None

QUERY PARAMETERS (all required):
* `email` - client email, the one to receive the confirmation email
* `product` - the product/service for which the voucher was purchased
* `business` - name of the company
* `price` - price paid for the voucher


Example request:

```.env
curl "https://xxxxxxxxx.execute-api.eu-central-1.amazonaws.com/default/send_email_voucher_purchase?email=email%40email.com&product=Salsa%20Class&business=Dancing%20Queen%20School&price=59.99"
```

### Mailgun

The function uses Mailgun account to send emails.

**NOTE:** before you verify a real domain in Mailgun only a sandbox domain is available. Emails sent from
a sandbox can only be delivered to the Mailgun account owner's email (no arbitrary email). Current code of the
function takes into account a state *before* the domain verification (if using a Gmail account, you can
receive emails there and forward them to a real final recipient with a simple script). Once the domain
is verified, you will need to adjust the function's code to send the confirmation email to the email address
provided in the query parameters.

### Deployment

You can deploy the Lambda function with AWS Serverless Application Model (SAM)/Cloud Formation using the
provided `template.yaml` file. 

Steps needed:
1. IAM role with proper permissions must be created and its ARN should be filled in `template.yaml` (`Role:`).
The policy name with the permissions: `AmazonS3ReadOnlyAccess` (to read the PDF file).
2. An S3 bucket is needed with a voucher PDF file stored in it. 
3. `template.yaml` contains environmental variables that the function will be using. They must be set. Description
of the environmental variables:
    *  `S3_BUCKET_NAME` - name of the S3 bucket where the PDF with a voucher is stored
    *  `S3_FILE_KEY` - S3 key (path) to the file. E.g. "voucher.pdf" (if the file is stored in root directory of
    the bucket)
    *  `MAILGUN_API_KEY` - API key provided by Mailgun for your account
    *  `MAILGUN_API_URL` - Your personal sandbox API URL
    *  `MAILGUN_POSTMASTER_MAIL` - Your sandbox postmaster email address
    *  `MAILGUN_USER_MAIL` - the email you created your Mailgun account with

