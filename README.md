# StainlessFolad Frontend

Welcome to the **StainlessFolad Frontend** project!  
This repository contains the source code for the web interface of StainlessFolad, designed for performance, scalability, and a seamless user experience.

---

## 🚀 Overview

StainlessFolad Frontend is a modern web application built to deliver a robust and responsive UI for managing and interacting with StainlessFolad services.  
It is containerized for easy deployment and integrates smoothly with backend APIs.

---

## 🛠️ Technologies Used

- **React** 
  For building interactive user interfaces.
- **TypeScript**  
  Ensures type safety and better developer experience.
- **Docker**  
  Containerizes the application for consistent deployments.
- **GitHub Actions**  
  Automates CI/CD for building, testing, and deploying.
- **Nginx**  
  Serves the frontend and handles static assets. Configurations are not included in the repo.

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/stainlessfolad/frontend.git
cd frontend

# Install dependencies
npm install   # or yarn install
```

### Development

```bash
# Start the development server
npm run dev   # or yarn run dev
```

### Build for Production

```bash
npm run build   # or yarn build
```

### Docker

```bash
# Build Docker image
docker build -t stainlessfolad-front .

# Run the container
docker run --rm -v /path/on/your/host:/app/dist stainlessfolad-front
```

---

## ⚙️ Deployment

This project uses **GitHub Actions** for automated deployment.  
On every push to the `main` branch, the workflow builds the Docker image, pushes it to your registry, and deploys it to your server via SSH.

See [`.github/workflows/deploy.yaml`](./.github/workflows/deploy.yaml) for details.

---

<!-- ## 📚 Documentation

- [Project Wiki](https://github.com/stainlessfolad/frontend/wiki)
- [API Reference](./docs/api.md)

--- -->

## 🤝 Contributing

Contributions are welcome!  
Please read our [Contributing Guidelines](./CONTRIBUTING.md) before submitting issues or pull requests.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 💡 Contact

For questions or support, open an issue or reach out at [dev@stainlessfolad.ir](mailto:dev@stainlessfolad.ir).

---

*Thank you for