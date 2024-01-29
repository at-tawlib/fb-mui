import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"

const Post = () => {
    return (
        <Card sx={{ margin: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 13, 2016"
            />
            <CardMedia
                component="img"
                height="19%"
                image="https://mui.com/static/images/cards/paella.jpg"
                // image="https://preview.redd.it/what-if-gege-wrote-naruto-while-kishimoto-wrote-jujutsu-v-1-nh26mfld2v2c1.jpg?auto=webp&s=1992a91f4e317df4de93cce3bcc9f8b3830fa2df"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 0 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post;