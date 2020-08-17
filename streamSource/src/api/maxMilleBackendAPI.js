const MAX_MILLE_API_URL = process.env.MAX_MILLE_API_URL;

export default function recordStatus(data) {
  navigator.sendBeacon(`${MAX_MILLE_API_URL}status`, data);
}
