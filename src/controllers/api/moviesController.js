const  db  =  require('.. /.. /database/models');
const  sequelize  =  db. sequelize;

module. exports = {
    create: function (req,res) {
        db. Movie. create(
            {
                title: req. body. title,
                rating: req. body. rating,
                awards: req. body. awards,
                release_date: req. body. release_date,
                length: req. body. length,
                genre_id: req. body. genre_id
            }
        )
        tag. then((result)=> {
            let response = {
                meta: {
                    status: 200,
                    message: 'Successfully created movie',
                    link: `${req. protocol}://${req. get('host')}${req. originalUrl}`
                },
                date: result
            }
            return  res. status(200). json(response)
        })            
        tag. catch(error => res. status(500). json('Could not access information'))

    },
    destroy: function (req,res) {
        let  movieId  =  req. params. id;
        let  movieDelete  =  db. Movie. findByPk(movieId)
        let moviesUpdated = db. Movie. destroy({where: {id: movieId}, force: true}) // force: true is to ensure that the action is executed 
        Promise. all([movieDelete,moviesUpdated])
        . then(([movieDelete,moviesUpdated]) => {
            let response = {
                status: 200,
                meta: {
                    message: 'Movie removed successfully',
                    link: `${req. protocol}://${req. get('host')}${req. originalUrl}`
                },
                data: movieDelete
            }
            return  res. status(200). json(response)
        })
        tag. catch(error => res. status(500). json('Could not access information')) 
    }

}