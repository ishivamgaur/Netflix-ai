export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://static.vecteezy.com/system/resources/previews/020/934/651/large_2x/doraemon-free-free-vector.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const TMBD_IMAGE_PATH_URL_LOW_RES = "https://image.tmdb.org/t/p/w300/";
export const TMBD_IMAGE_PATH_URL_HIGH_RES =
  "https://image.tmdb.org/t/p/orignal";

//Backend URL
export const AI_SUGGESTION_API_URL = import.meta.env.VITE_BACKEND_URL;
