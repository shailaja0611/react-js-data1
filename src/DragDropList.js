
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DragDropList = () => {
    const initialItems = [
        { id: '1', content: 'Item 1' },
        { id: '2', content: 'Item 2' },
        { id: '3', content: 'Item 3' },
        { id: '4', content: 'Item 4' },
    ];

    const [items, setItems] = useState(initialItems);

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(items);
        const [movedItem] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, movedItem);

        setItems(reorderedItems);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{ listStyleType: 'none', padding: 0 }}
                    >
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided) => (
                                    <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                            userSelect: 'none',
                                            padding: '16px',
                                            margin: '0 0 8px 0',
                                            backgroundColor: '#fff',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            ...provided.draggableProps.style,
                                        }}
                                    >
                                        {item.content}
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DragDropList;
