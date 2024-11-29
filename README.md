# EKS Deployment Pipeline

This project automates the process of building Docker images for a backend and frontend application, pushing them to Amazon Elastic Container Registry (ECR), and deploying them to Amazon Elastic Kubernetes Service (EKS) using a CI/CD pipeline.
---
## Branch Structure
The repository contains two main branches:
- **`backend`**: Contains the backend application code and Docker configuration.
- **`frontend`**: Contains the frontend application code, Docker configuration, and Kubernetes manifests (`deployment.yml`, `service.yml`, `ingress.yml`) specific to the frontend service.
---
The pipeline:
1. Builds Docker images for both services.
2. Pushes images to ECR.
3. Deploys the services to EKS clusters.
---
## Prerequisites
Before using this repository, ensure you have the following:
1. An AWS account .
2. AWS CLI installed and configured.
3. Kubectl installed and configured for your EKS cluster.
4. Docker installed on your machine.
5. CI/CD platform account ( Jenkins).

---

## Pipeline Workflow
### 1. Backend Pipeline
- Builds the Docker image for the backend service.
- Pushes the image to the designated ECR repository.
- Updates the EKS deployment with the new image.

### 2. Frontend Pipeline
- Builds the Docker image for the frontend service.
- Pushes the image to the designated ECR repository.
- Updates the EKS deployment with the new image.

### 3. Deployment
Both backend and frontend services are deployed as separate workloads in the EKS cluster using Kubernetes Deployment manifests.
---
## Technologies Used
- **AWS ECR**: For storing Docker images.
- **AWS EKS**: For running the containerized applications.
- **Docker**: For containerizing the applications.
- **Kubernetes**: For orchestration.
- **CI/CD Tool**: For automating the pipeline .
- **Ingress NGINX Controller**: For managing external access to the services running in the EKS cluster.
---

