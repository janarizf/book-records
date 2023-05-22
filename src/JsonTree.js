import React from 'react';
import { Button } from 'react-bootstrap';

const JsonTree = ({ data, parentPath, onNodeClick }) => {

    const renderNode = (node, key) => {

        const handleNodeClick = () => {
            onNodeClick([...parentPath, node.id]);
        };
    
        if (typeof node === 'object' && node !== null) {
            return (
                <ul>
                    {Object.entries(node).map(([nestedKey, value]) => (
                        <li key={nestedKey}>
                            <Button onClick={() => handleNodeClick()}>   <strong>{nestedKey}: </strong></Button>
                            {renderNode(value, nestedKey)}
                        </li>
                    ))}
                </ul>
            );
        }
        return (
            <span
            >
               <Button onClick={() => handleNodeClick()}>{node}sdfsdfsdfsdfs</Button> 
            </span>
        );
    };

};

export default JsonTree;