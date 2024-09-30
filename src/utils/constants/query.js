import dotenv from 'dotenv';

dotenv.config();

export const API_ENDPOINT = {
    QUOTE: {
        GET_ALL: {
            KEY: 'GET_ALL_QUOTE',
            PATH: '/getQuotes',
            MESSAGE: {
                SUCCESS: 'fetched all quote successfully',
                ERROR: 'Error occured while getting the quotes'
            },
        },
        UPLOAD_IMAGE: {
            KEY: 'UPLOAD_IMAGE',
            PATH: `${process.env.NEXT_PUBLIC_MEDIA_URL}/media/assignment/upload`,
            MESSAGE: {
                SUCCESS: 'Image uploaded successfully',
                ERROR: 'Some Error Occured while uploading image'
            }
        },
        POST_QUOTE: {
            KEY: 'POST_QUOTE',
            PATH: '/postQuote',
            MESSAGE: {
                SUCCESS: 'Quote uploaded successfully',
                ERROR: 'Some Error Occured while posting quote'
            }
        },
    },
    AUTH: {
        LOGIN: {
            KEY: 'LOGIN_USER',
            PATH: '/login',
            MESSAGE: {
                SUCCESS: 'You are login successfully',
                ERROR: 'Error occured while Authentication'
            },
        }
    }
}