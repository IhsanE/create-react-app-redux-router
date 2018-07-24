import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import '../App.css';

class CardComponent extends Component {
  componentWillMount() {
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>
              Card title
            </CardTitle>
            <CardSubtitle>
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
      </div>
    )
  }
};

CardComponent.propTypes = {
  data: PropTypes.shape({}).isRequired
}

export default CardComponent;