# This Project is all about basic Demonstration of AWS CDK on Ts

This is a blank project for CDK development with TypeScript.

## Requirements for Developing Infra on CDK over Ts

- **Node Js :** https://nodejs.org/en/download
- **AWS CLI :** https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

- **AWS SAM CLI :** https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html

## NPM Commands for initial Setup

- **For AWS CDK** `npm install -g aws-cdk`
- **For TypeScript** `npm install -g typescript` (if yoy don't have typescript initially)

## AWS CLI Commands for configuation

- Go to AWS Console and create IAM user with **AdministratorAccess** policy attached to it
- later go to security credentials and create access key you will be provided with access key id && secret access key
- in CMD type `aws configure` and provide the required details

## Useful CDK Commands to build and deploy

- **For Creation of Project** `cdk init app --language typescript`
- **For Bootstraping AWS Account** `cdk bootstrap`
- **For Synthesising and logging .yaml template** `cdk synth`
- **For Deploying the stack** `cdk deploy`
- **For Destroying the stack** `cdk destroy`
