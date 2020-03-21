AWS Lambda function to send voucher purchase confirmation details emails
===========================================================================

Serverless function that sends emails with details of a voucher purchase to the app admin email.


### Usage

Lambda is triggered by an API Event (sending a request to a configured API endpoint). 

API type: HTTP

Authorization: None

QUERY PARAMETERS (all required):
* `product` - the product/service for which the voucher was purchased
* `business` - name of the company
* `price` - price paid for the voucher


Example request:

```.env
curl "https://xxxxxxxxx.execute-api.eu-central-1.amazonaws.com/default/send_email_internal_confirmation?product=Salsa%20Class&business=Dancing%20Queen%20School&price=59.99"
```

### Mailgun

The function uses Mailgun account to send emails. Email is sent to the email address used to create the Mailgun account
(it should be the app admin's email).

### Deployment

You can deploy the Lambda function with AWS Serverless Application Model (SAM)/Cloud Formation using the
provided `template.yaml` file. 

Steps needed:
1. `template.yaml` contains environmental variables that the function will be using. They must be set. Description
of the environmental variables:
    *  `MAILGUN_API_KEY` - API key provided by Mailgun for your account
    *  `MAILGUN_API_URL` - Your personal sandbox API URL
    *  `MAILGUN_POSTMASTER_MAIL` - Your sandbox postmaster email address
    *  `MAILGUN_USER_MAIL` - the email you created your Mailgun account with
    



