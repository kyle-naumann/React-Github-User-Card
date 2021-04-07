import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';


function UserCard(props) {
    return (
        <div>
<Card>
    <CardImg src={props.user.avatar_url} alt= "Profile Picture"/>
    <CardBody>
        <CardTitle>{props.user.login}</CardTitle>
        <CardSubtitle>{props.user.name}</CardSubtitle>
        <CardSubtitle>Followers - {props.user.followers}</CardSubtitle>
        <CardText>{props.user.bio}</CardText>
    </CardBody>
</Card>
        </div>
    )
}

export default UserCard
