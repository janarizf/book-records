import React, { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LibraryData from './Data/Library.json'
import JsonTree from "./JsonTree";


function TreeNode({ node, parentPath, onNodeClick }) {
  const handleNodeClick = () => {
    onNodeClick([...parentPath, node.Name]);
  };
  return (
    <Row className="tree">

      <span onClick={handleNodeClick}>{node.Name}</span>
      {node.Child && (
        <ul>
          {node.Child.map((child, index) => (
            <li key={index}>
              <TreeNode
                node={child}
                parentPath={[...parentPath, node.Name]}
                onNodeClick={onNodeClick}
              />
            </li>
          ))}

        </ul>
      )}


    </Row>
  );
}

export default function AddBooks() {
  const [parentPath, setParentPath] = useState([]);
  const [show, setShow] = useState(false);


  function saveBook() {
    setShow(true)
  };

  function saveLocation() {
    setShow(true)
  };

  const handleNodeClick = (path) => {
    setParentPath(path);
  };



  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Control type="text" placeholder="Path" value={parentPath.join(' > ')} />
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
            />
            <Button onClick={saveLocation}>Add Location</Button>
            <Button onClick={saveBook}>Add Book</Button>
          </Form>
          <TreeNode
            node={LibraryData}
            parentPath={[]}
            onNodeClick={handleNodeClick}
          />
        </Col>
      </Row>


    </Container>
  );
}