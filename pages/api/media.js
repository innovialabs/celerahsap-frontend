export default function getStrapiImage(url) {
  // * There is no image url
  if (url === null) {
    return null;
  }

  // * Image is hosted on an external provider
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }

  // * Image comes from strapi
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${url}`;
}
