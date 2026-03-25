# 🐾 Administrador de Pacientes de Veterinaria

Una aplicación web FullStack desarrollada con el stack MERN (MongoDB, Express, React, Node.js) diseñada para optimizar la gestión de clínicas veterinarias. Este sistema permite a los profesionales registrarse, iniciar sesión de forma segura y llevar un control detallado de sus pacientes, incluyendo información de las mascotas, datos de contacto de los dueños y seguimiento de síntomas. 

## 🚀 Características Principales

* **Autenticación y Autorización:**
    * Sistema de registro y login seguro exclusivo para veterinarios.
    * Protección de rutas y endpoints mediante JSON Web Tokens (JWT).
    * Cada veterinario solo tiene acceso a sus propios pacientes, garantizando la privacidad y seguridad de los datos.
* **Administrador de Pacientes (CRUD Completo):**
    * **Alta:** Registro de nuevos pacientes incluyendo datos de la mascota, información del propietario, email de contacto, fecha de ingreso y descripción detallada de los síntomas.
    * **Lectura:** Panel de control con el listado completo de los pacientes activos del veterinario.
    * **Actualización:** Edición rápida de la información y estado de un paciente existente.
    * **Baja:** Eliminación de pacientes del sistema una vez finalizado el tratamiento o derivados.
* **Interfaz de Usuario (UI):**
    * Single Page Application (SPA) para una navegación rápida y sin recargas.
    * Diseño responsivo adaptado para su uso en computadoras o dispositivos móviles dentro de la clínica.

## 🛠️ Tecnologías Utilizadas

**Frontend:**
* **React** (Interfaz de usuario)
* **React Router DOM** (Navegación)
* **Context API** (Manejo del estado global de pacientes y sesión)

**Backend:**
* **Node.js** (Entorno de ejecución)
* **Express.js** (Framework de servidor)
* **JWT** (JSON Web Tokens para autenticación)

**Base de Datos:**
* **MongoDB** (Base de datos NoSQL)
* **Mongoose** (Modelado de datos / ODM)
