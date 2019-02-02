import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 0,
  margin: `0 ${grid}px 0 0`,

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  display: 'flex',
  padding: grid,
  overflow: 'auto',
});

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          imgSrc: 'https://game-of-thrones-scoreboard.netlify.com/stark.png'
        },
        {
          id: 2,
          imgSrc: 'https://game-of-thrones-scoreboard.netlify.com/lannister.png'
        },
        {
          id: 3,
          imgSrc: 'https://game-of-thrones-scoreboard.netlify.com/tyrell.png'
        },
        {
          id: 4,
          imgSrc: 'https://game-of-thrones-scoreboard.netlify.com/martell.png'
        },
        {
          id: 5,
          imgSrc: 'https://game-of-thrones-scoreboard.netlify.com/baratheon.png'
        },
        {
          id: 6,
          imgSrc: 'https://game-of-thrones-scoreboard.netlify.com/greyjoy.png'
        },
        {
          id: 7,
          imgSrc: 'https://game-of-thrones-scoreboard.netlify.com/arryn.png'
        },
        {
          id: 8,
          imgSrc: 'https://game-of-thrones-scoreboard.netlify.com/targaryen.png'
        }
      ]
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <img src={item.imgSrc} alt ={item.id} width="48" height="48" class="padded-track" />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default Track;
