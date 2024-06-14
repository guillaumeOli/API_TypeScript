import { getMetadataDto } from "../dtos/getMetadata.dto";
import { getSummariesDto } from "../dtos/getSummaries.dto";
import { getTranscriptDto } from "../dtos/getTranscript.dto";
import { getUserDto } from "../dtos/getUsers.dto";

export const dataGetUsers: Array<getUserDto>= [
    {
        user_id: 1,
        name: 'name1',
    },
    {
        user_id: 2,
        name: 'name2',
    },
    {
        user_id: 3,
        name: 'name3',
    },
    {
        user_id: 4,
        name: 'name4',
    },
    {
        user_id: 5,
        name: 'name5',
    },
                        
]


export const dataGetMetadata: Array<getMetadataDto>= [
    {
        timestamp: new Date().toISOString(),
        user_id: 1,
        id_call: 11,
        city: 'city1',
        name: 'name1',
        country: 'country1',
        state: 'state1'
    },
    {
        timestamp: new Date().toISOString(),
        user_id: 2,
        id_call: 12,
        city: 'city2',
        name: 'name2',
        country: 'country2',
        state: 'state2'
    },
    {
        timestamp: new Date().toISOString(),
        user_id: 3,
        id_call: 13,
        city: 'city3',
        name: 'name3',
        country: 'country3',
        state: 'state3'
    },
    {
        timestamp: new Date().toISOString(),
        user_id: 4,
        id_call: 14,
        city: 'city4',
        name: 'name4',
        country: 'country4',
        state: 'state4'
    },
    {
        timestamp: new Date().toISOString(),
        user_id: 5,
        id_call: 15,
        city: 'city5',
        name: 'name5',
        country: 'country5',
        state: 'state5'
    },

]

export const dataGetSummaries: Array<getSummariesDto>= [
    {
        user_id: 1,
        id_call: 11,
        summary: "summary11"
    },
    {
        user_id: 2,
        id_call: 12,
        summary: "summary12"
    },
    {
        user_id: 3,
        id_call: 13,
        summary: "summary13"
    },
    {
        user_id: 4,
        id_call: 14,
        summary: "summary14"
    },
    {
        user_id: 5,
        id_call: 15,
        summary: "summary15"
    },

]

export const dataGetTranscripts: Array<getTranscriptDto>= [
    {
        user_id: 1,
        id_call: 11,
        transcript: "Lorem ipsum dolor sit amet. Eos consequatur error vel cupiditate aliquam aut repudiandae enim et dolores asperiores est aliquid rerum est nulla corporis. Est laboriosam ipsam ea unde numquam aut temporibus omnis qui perspiciatis consectetur et perferendis saepe."
    },
    {
        user_id: 2,
        id_call: 12,
        transcript: "Lorem ipsum dolor sit amet. Eos consequatur error vel cupiditate aliquam aut repudiandae enim et dolores asperiores est aliquid rerum est nulla corporis. Est laboriosam ipsam ea unde numquam aut temporibus omnis qui perspiciatis consectetur et perferendis saepe."
    },
    {
        user_id: 3,
        id_call: 13,
        transcript: "Lorem ipsum dolor sit amet. Eos consequatur error vel cupiditate aliquam aut repudiandae enim et dolores asperiores est aliquid rerum est nulla corporis. Est laboriosam ipsam ea unde numquam aut temporibus omnis qui perspiciatis consectetur et perferendis saepe."
    },
    {
        user_id: 4,
        id_call: 14,
        transcript: "Lorem ipsum dolor sit amet. Eos consequatur error vel cupiditate aliquam aut repudiandae enim et dolores asperiores est aliquid rerum est nulla corporis. Est laboriosam ipsam ea unde numquam aut temporibus omnis qui perspiciatis consectetur et perferendis saepe."
    },
    {
        user_id: 5,
        id_call: 15,
        transcript: "Lorem ipsum dolor sit amet. Eos consequatur error vel cupiditate aliquam aut repudiandae enim et dolores asperiores est aliquid rerum est nulla corporis. Est laboriosam ipsam ea unde numquam aut temporibus omnis qui perspiciatis consectetur et perferendis saepe."
    },

]