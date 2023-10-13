const infoOrganization = (Information) => {
    Information.map((videogame) => {
        return {
            id: videogame.id,
            name: videogame.name,
            description: videogame.description,
            planform: videogame.planform.platform,
            image: videogame.background_image,
            launching_date: videogame.launching_date,
            rating: videogame.rating,
            genre: videogame.genre,
        };
    })
};

module.exports = { infoOrganization }