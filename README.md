# Target Image Carousel

## Server API
### All API routes
  * GET `/api/items/:id/photos`
  * POST `/api/items/:id/photos`
  * DELETE `/api/items/:id/photos/:photo_id`
  * PUT `/api/items/:id/photos/:photo_id`

### Get all photos for item
  * GET `/api/items/:id/photos`

**Path Parameters:**
  * `id` item id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "imageURL": "image URL",
      "description": "String",
      "posted": "YYYY-MM-MM",
      "item": "id Number"
    }
```

### Add photo to item
  * POST `/api/items/:id/photos`

**Path Parameters:**
  * `id` item id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
      {
      "imageURL": "image URL",
      "description": "String",
      "posted": "YYYY-MM-MM",
      "item": "id Number"
    }
```

### Update photo
  * PUT `/api/items/:id/photos/:photo_id`

**Path Parameters:**
  * `id` item id
  * `photo_id` photo id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
   {
      "id": "Number",
      "imageURL": "image URL",
      "description": "String",
      "posted": "YYYY-MM-MM"
    }
```

### Delete photo
  * DELETE `/api/items/:id/photos/:photo_id`

**Path Parameters:**
  * `id` item id
  * `photo_id` photo id

**Success Status Code:** `204`

### Add photo to item
  * POST `/api/items/:id/photos`

**Path Parameters:**

  * `id` item id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "image": "image URL",
      "description": "String",
      "posted": "YYYY-MM-MM",
      "category": "String",
      "item": "id Number"
    }
```