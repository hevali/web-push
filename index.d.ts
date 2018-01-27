export declare function generateVAPIDKeys(): VAPIDKeys;

export declare function setGCMAPIKey(key: string): void;

export declare function encrypt(userPublicKey: string, userAuth: string, payload: string): EncryptedData;

export declare function getVapidHeaders(audience: string, subject: string, publicKey: string, privateKey: string): EncryptedData;

export declare function generateRequestDetails(pushSubscription: PushSubscription, payload?: string | Buffer, options?: PushOptions)

export declare function setVapidDetails(mail: string, publicKey: string, privateKey: string): void;

export declare function sendNotification(pushSubscription: PushSubscription, payload?: string | Buffer, options?: PushOptions): Promise<PushResponse>;

export interface PushSubscription {
    endpoint: string;
    keys: {
        auth: string;
        p256dh: string;
    }
}

export interface PushOptions {
    gcmAPIKey?: string;
    vapidDetails?: VAPIDKeys & {
        subject: string;
    };
    TTL?: number;
    headers?: Headers;
    agent?: any
}

interface VAPIDKeys {
    publicKey: string;
    privateKey: string;
}

interface EncryptedData {
    localPublicKey: string;
    salt: string;
    cipherText: Buffer;
}

interface RequestDetails {
    endpoint: string;
    method: string;
    headers: Headers;
    body: Buffer;
}

interface PushResponse {
    statusCode: number;
    headers: Headers;
    body: any;
}

type Headers = { [key: string]: string; };