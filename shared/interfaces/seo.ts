export interface Seo {
  title: string;
  description: string;
  keywords: string;
  author: string;
  web_author: string;
  og?: {
    title: string;
    site_name: string;
    url: string;
    type: string;
    description: string;
    image?: {
      path: string;
      type: 'image/png' | 'image/jpg' | 'image/gif';
      width: string;
      height: string;
    };
  };
}
