export const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'colors',
        title: 'Colors',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'colorCode',
                title: 'Color Code',
                type: 'string',
                validation: (Rule: any) => Rule.required()
              }
            ]
          }
        ]
      }
    ]
  }
  
  