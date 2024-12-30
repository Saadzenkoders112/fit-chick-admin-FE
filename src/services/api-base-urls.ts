/**
 * Live URL that checks if the app is in production or development.
 */
const IS_LIVE = false;

/**
 * Production URL that will be treated as global start-point and is connected to production backend API.
 */
const PRODUCTION_URL = process.env.NEXT_PUBLIC_API_URL as string;

/**
 * Local URL that will be treated as global start-point and is connected to local backend or AWS Elastic API.
 */
const LOCAL_URL = 'https://8gtsh2ws-3000.inc1.devtunnels.ms' as string;

/**
 * Base URL that will be treated as global start-point.
 */
export const BASE_URL = IS_LIVE ? PRODUCTION_URL : LOCAL_URL;

export const URL = {
  // ======================== User Authentication ========================

  ADMIN_LOGIN: `${BASE_URL}/auth/admin/login`,

  GET_USER: `${BASE_URL}/auth/getUser`,
  // ======================== File Upload ========================

  UPLOAD_PDF: (uid: string | string[]) => `${BASE_URL}/S3/fileUpload/${uid}`,
} as const;
