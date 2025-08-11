import RestaurantCard from "./RestaurantCard";

const resCardsApiRespose = [
    {
        "id": "750591",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
            "text": "Biryani",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for biryani",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750201",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
            "text": "Paratha",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for paratha",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "749772",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
            "text": "Noodles",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for noodles",
            "altTextCta": "open"
        },
        "entityId": "80463",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "749760",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
            "text": "Khichdi",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for khichdi",
            "altTextCta": "open"
        },
        "entityId": "80455",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750587",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
            "text": "Chinese",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for chinese",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750571",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
            "text": "Pure Veg",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for veg",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "749984",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83659?collection_id=83659&tags=layout_CCS_Coffee&type=rcv2",
            "text": "Coffee",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for coffee",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83659&tags=layout_CCS_Coffee",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750581",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
            "text": "North Indian",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for north indian",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "749762",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80458?collection_id=80458&tags=layout_BAU_Contextual%2Classi&type=rcv2",
            "text": "Lassi",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for lassi",
            "altTextCta": "open"
        },
        "entityId": "80458",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750586",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab jamun.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80430?collection_id=80430&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2",
            "text": "Gulab Jamun",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for gulab jamun",
            "altTextCta": "open"
        },
        "entityId": "80430",
        "frequencyCapping": {},
        "externalMarketing": {}
    }
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    resCardsApiRespose.map(data => <RestaurantCard key={data.id} resCards={data}/>)
                }

                {/* // Passing Dynamic res-cards value using Index methode - But have to use .MAP Methode
                <RestaurantCard resCards={resCardsApiRespose[0]}/>
                <RestaurantCard resCards={resCardsApiRespose[1]}/>
                <RestaurantCard resCards={resCardsApiRespose[2]}/> */}
            </div>
        </div>
    )
}

export default Body;