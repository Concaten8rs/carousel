# Target Image Carousel

## Server API
### All API routes
  * GET `/api/items/:id/photos`
  * POST `/api/items/:id/photos`
  * PUT `/api/items/:id/photos/:photo_id`
  * DELETE `/api/items/:id/photos/:photo_id`

### Get all photos for item
  * GET `/api/items/:id/photos`

**Path Parameters:**
  * `id` item id

**Success Status Code:** `200`

**Returns:** JSON

```json
    [
      {
        "id": "Number",
        "photo_description": "String",
        "photo_url": "URL",
        "posting_date": "Date",
        "photo_product_id": "Number"
      },
      {
        "id": "Number",
        "photo_description": "String",
        "photo_url": "URL",
        "posting_date": "Date",
        "photo_product_id": "Number"
      },
      {
        "id": "Number",
        "photo_description": "String",
        "photo_url": "URL",
        "posting_date": "Date",
        "photo_product_id": "Number"
      }
    ]
```

### Add photo to item
  * POST `/api/items/:id/photos`

**Path Parameters:**
  * `id` item id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "photo_description": "String",
      "photo_url": "URL",
      "posting_date": "Date",
      "photo_product_id": "Number"
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
      "photo_description": "String",
      "photo_url": "URL",
      "posting_date": "Date",
      "photo_product_id": "Number",
    }
```

### Delete photo
  * DELETE `/api/items/:id/photos/:photo_id`

**Path Parameters:**
  * `id` item id
  * `photo_id` photo id

**Success Status Code:** `204`