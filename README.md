# currency-converter-webapp

1. docker pull mansigandhi003/currencyconv:latest
2. docker pull mansigandhi003/historic:latest
3. docker pull mansigandhi003/bff:latest
4. docker pull mansigandhi003/app:latest
5. docker run -d -p 8081:8081 mansigandhi003/currencyconv:latest
6. docker run -d -p 8083:8083 mansigandhi003/historic:latest
7. docker run -d -p 8000:8000 ansigandhi003/bff:latest
8. docker run -d -p 3000:3000 mansigandhi003/app:latest
9. Then go to your terraform scripts to run the aws-eks cluster creation
  Perform 2 basic commands
   Terraform init
   Terraform plan
   Terraform apply
10. After the terraform has been successfully executed perform the following steps:
i. terraform output config_map_aws_auth > config_map_aws_auth.yaml &&
ii. terraform output kubeconfig > ~/.kube/config-terraform-eks-converter &&
iii. cp ~/.kube/ config-terraform-eks-converter  ~/.kube/config &&
iv. export KUBECONFIG=~/.kube/config-terraform-eks-converter:~/.kube/config &&
v. echo "export KUBECONFIG=${KUBECONFIG}" >>${HOME}/.bash_profile &&
vi. kubectl apply -f config_map_aws_auth.yaml
vii. terraform output config_map_aws_auth
viii. terraform output config_map_aws_auth> /tmp/config-map-aws-auth.yml
vix. kubectl apply -f /tmp/config-map-aws-auth.yml
vx. kubectl create -f https://raw.githubusercontent.com/dinorows/TCO490/master/kubernetes-dashboard-15.yaml
vxi. kubectl proxy --port=8080 --disable-filter=true

11. Then run your Kubernetes deployment and service files accordingly
i. kubectl apply -f Deployment/deployment4.yaml
ii. kubectl apply -f Deployment/deployment3.yaml
iii. kubectl apply -f Deployment/deployment2.yaml
iv. kubectl apply -f Deployment/deployment1.yaml
v. kubectl apply -f Service/service4.yaml
vi. kubectl apply -f Service/service3.yml
vii. kubectl apply -f Service/service2.yaml
viii. kubectl apply -f Service/service1.yaml
h. Then do “kubectl get pods”
i. Then “kubectl get svc”
j. You will see an external IP generated for the LoadBalancer k8s pod, wait for a
few minutes and hit the external IP on your browser, you will see your website
running on that IP

12. Now the monitoring part of the project, run all the deployment and service files related
to Prometheus and Grafana
a. Kubectl create namespace monitoring
b. Kubectl create -f clusterRole.yaml
c. Kubectl create -f config-map.yaml
d. Kubectl create -f prometheus-deployment.yaml
e. Kubectl get deployments -n monitoring
f. Kubectl create -f prometheus -service.yaml -n monitoring
g. Kubectl get svc -n monitoring
h. Kubectl create -f grafana-datasource-config.yaml
i. Kubectl create -f grafana-datasource-deploy.yaml
j. Kubectl create -f grafana-datasource-service.yaml
k. Then do “kubectl get svc”, hit the external IP generated with the port number
and you will see the UI for Prometheus and Grafana
l. In the Grafana UI enter the username and password as admin, admin
m. Then for you to import the default dashboard for your cluster, go to import and
enter the Dashboard ID as 10000
n. There you can see the metrics of your nodes and the services deployed, how
much CPU usage is being done and all other factors
