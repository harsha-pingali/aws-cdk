import * as cdk from 'aws-cdk-lib';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { Code, Function, Runtime, } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { join } from 'path';
import * as dotenv from "dotenv";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
dotenv.config();
export class AwsCdkStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    //L1 && L2 Constructs of S3 BKT

    //L1
    // const level1S3=new CfnBucket(this,"level1Bucket",{
    //   versioningConfiguration:{
    //     status:"Enabled"
    //   }
    // })

    //L2
    // const level2S3=new Bucket(this,"level2Bucket",{
    //   bucketName:"harshas-l2-bucket",
    //   versioned:true
    // })

    // const myLambda = new Function(this, 'MyLambda', {
    //   runtime: Runtime.NODEJS_LATEST, // Node.js 18.x supports ECMAScript Modules
    //   code: Code.fromAsset('../resources'), // Point to your Lambda code directory
    //   handler: 'lambdaFunc.lambda1', // Specify the handler function
    // });

    // const myLambda=new NodejsFunction(this,'mylambda1',{
    //   runtime:Runtime.NODEJS_18_X,
    //   entry:join(__dirname,'../resources','lambdaFunc.js'),
    //   handler:'lambda1'
    // })

    // const myLambda2=new NodejsFunction(this,'mylambda2',{
    //   runtime:Runtime.NODEJS_18_X,
    //   entry:join(__dirname,'../resources','lambdaFunc.js'),
    //   handler:'lambda2'
    // })

     console.log(process.env.key)
    const myLambda = new Function(this, 'MyPythonLambda', {
      runtime: Runtime.PYTHON_3_10, //Python runtime
      code: Code.fromAsset(join(__dirname, '../resources/python/weatherLambda.zip',)), // Path to the Python Lambda function
      handler: 'weatherLambda.lambda_handler', // File name and function name
      environment: {
        key:process.env.key || "", 
        host:process.env.host || ""
      },
    });

  }
}
