# Backend Endpoints Description

## Complaint Endpoints

### GET `/complaint`
- Description: Retrieves all complaints.
- Response: JSON array of complaint objects.
- Error Response: Internal server error.

### GET `/complaint/:appId`
- Description: Retrieves a specific complaint by its application ID.
- Parameters:
  - `appId`: Application ID of the complaint.
- Response: JSON object of the complaint.
- Error Response: Internal server error.

### POST `/complaint`
- Description: Creates a new complaint.
- Request Body: JSON object representing the complaint.
- Response: JSON object of the created complaint.
- Error Response: Internal server error.

### DELETE `/complaint/:appId`
- Description: Deletes a complaint by its application ID.
- Parameters:
  - `appId`: Application ID of the complaint to be deleted.
- Response: JSON object of the deleted complaint.
- Error Response: Internal server error.

## Material Endpoints

### GET `/resource/material`
- Description: Retrieves all materials.
- Response: JSON array of material objects.
- Error Response: Internal server error.

### GET `/resource/material/:appId`
- Description: Retrieves a specific material by its application ID.
- Parameters:
  - `appId`: Application ID of the material.
- Response: JSON object of the material.
- Error Response: Internal server error.

### POST `/resource/material`
- Description: Creates a new material.
- Request Body: JSON object representing the material.
- Response: JSON object of the created material.
- Error Response: Internal server error.

### PATCH `/resource/material`
- Description: Updates all materials.
- Request Body: JSON object containing updated material data.
- Response: JSON object of the updated materials.
- Error Response: Internal server error.

## Labour Endpoints

### GET `/resource/labour`
- Description: Retrieves all labours.
- Response: JSON array of labour objects.
- Error Response: Internal server error.

### GET `/resource/labour/:appId`
- Description: Retrieves a specific labour by its application ID.
- Parameters:
  - `appId`: Application ID of the labour.
- Response: JSON object of the labour.
- Error Response: Internal server error.

### POST `/resource/labour`
- Description: Creates a new labour.
- Request Body: JSON object representing the labour.
- Response: JSON object of the created labour.
- Error Response: Internal server error.

### DELETE `/resource/labour/:appId`
- Description: Deletes a labour by its application ID.
- Parameters:
  - `appId`: Application ID of the labour to be deleted.
- Response: JSON object of the deleted labour.
- Error Response: Internal server error.

### PATCH `/resource/labour/:appId`
- Description: Updates a labour by its application ID.
- Parameters:
  - `appId`: Application ID of the labour to be updated.
- Request Body: JSON object containing updated labour data.
- Response: JSON object of the updated labour.
- Error Response: Internal server error.

## User Endpoints

### GET `/user`
- Description: Retrieves all users.
- Response: JSON array of user objects.
- Error Response: Internal server error.

### GET `/user/:appId`
- Description: Retrieves a specific user by its application ID.
- Parameters:
  - `appId`: Application ID of the user.
- Response: JSON object of the user.
- Error Response: Internal server error.

### POST `/user`
- Description: Creates a new user.
- Request Body: JSON object representing the user.
- Response: JSON object of the created user.
- Error Response: Internal server error.

### DELETE `/user/:appId`
- Description: Deletes a user by its application ID.
- Parameters:
  - `appId`: Application ID of the user to be deleted.
- Response: JSON object of the deleted user.
- Error Response: Internal server error.

### PATCH `/user/:appId`
- Description: Updates a user by its application ID.
- Parameters:
  - `appId`: Application ID of the user to be updated.
- Request Body: JSON object containing updated user data.
- Response: JSON object of the updated user.
- Error Response: Internal server error.

## Priority List Endpoints

### GET `/list`
- Description: Retrieves all priority lists.
- Response: JSON array of priority list objects.
- Error Response: Internal server error.

### GET `/list/:appId`
- Description: Retrieves a specific priority list by its application ID.
- Parameters:
  - `appId`: Application ID of the priority list.
- Response: JSON object of the priority list.
- Error Response: Internal server error.

### POST `/list`
- Description: Creates a new priority list.
- Request Body: JSON object representing the priority list.
- Response: JSON object of the created priority list.
- Error Response: Internal server error.

### DELETE `/list/:appId`
- Description: Deletes a priority list by its application ID.
- Parameters:
  - `appId`: Application ID of the priority list to be deleted.
- Response: JSON object of the deleted priority list.
- Error Response: Internal server error.

### PATCH `/list/:appId`
- Description: Updates a priority list by its application ID.
- Parameters:
  - `appId`: Application ID of the priority list to be updated.
- Request Body: JSON object containing updated priority list data.
- Response: JSON object of the updated priority list.
- Error Response: Internal server error.
