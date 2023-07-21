CloudFormation template sets up a 3-tier infrastructure with a public-facing web server in a public subnet, a database server in a private subnet, and NAT gateways to enable internet access for instances in the private subnets while maintaining a higher level of security.
For AWS-metadata.sh
chmod +x AWS-metadata.sh
./AWS-metadata.sh instance-id
