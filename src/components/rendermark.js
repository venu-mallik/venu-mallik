import React, { useState, useEffect } from 'react';
import {marked} from 'marked';

const MarkdownRenderer = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchData = () => {
      fetch(filePath).then((res) =>
      res.text()).then((res) => {
        console.log(res);
      setMarkdownContent(marked(res));
      });
    };

    fetchData();
  }, [filePath]);

  return (
    markdownContent !== '' &&
    <div className='mdcss' dangerouslySetInnerHTML={{ __html: markdownContent }} />
  );
};

export default MarkdownRenderer;
