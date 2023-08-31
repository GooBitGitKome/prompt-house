export type Item = {
  name: string;
  description?: string;
};
  
  export const items_discriptions : { pageType: string; title: string; title_Dscription : string ; items: Item[]; }[] = [
    {
      pageType : 'buy',
      title : 'Prompt Details',
      title_Dscription : 'You can see this item\'s prompt after you buy',
      items: [
        {
          name: 'Prompt Type',
          description: 'Create UI that is shared across routes',
        },
        {
          name: 'Prompt',
          description: '',
        },
        {
          name: 'Parameters',
          description: '',
        },
        {
          name: 'Description',
          description: 'Organize routes without affecting URL paths',
        },
        {
          name: 'Price',
          description: 'Render multiple pages in the same layout',
        },
      ],
    },
    {
      pageType: 'owned',
      title : 'Prompt Details [Owned]',
      title_Dscription : 'You are one of this prompt\'s owners.',
      items: [
        {
          name: 'Prompt Type',
          description: '',
        },
        {
          name: 'Prompt',
          description: '',
        },
        {
          name: 'Parameters',
          description: '',
        },
        {
          name: 'Description',
          description: '',
        },
        {
          name: 'Price',
          description: '',
        },
      ],
    },
    {
      pageType: 'ongoing',
      title : 'Prompt Details [Waiting for your review]',
      title_Dscription : 'After you get this prompt from the publisher,\n Please REVIEW this prompt.',
      items: [
        {
          name: 'Prompt Type',
          description: '',
        },
        {
          name: 'Prompt',
          description: '',
        },
        {
          name: 'Parameters',
          description: '',
        },
        {
          name: 'Description',
          description: '',
        },
        {
          name: 'Price',
          description: 'Your review affect the publisher\'s benefit (e.g, 1-star is The Price * 0.7, 5-star is The price * 1)',
        },
      ],
    }
  ];
  