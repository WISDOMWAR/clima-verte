import React from 'react';
import './style.css';

function Page() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#list1">List 1</a></li>
          <li><a href="#list2">List 2</a></li>
          <li><a href="#list3">List 3</a></li>
          <li><a href="#list4">List 4</a></li>
          <li><a href="#list5">List 5</a></li>
          <li><a href="#list6">List 6</a></li>
        </ul>
      </nav>
      <div id="list1">
        <h2>List 1</h2>
        <ul>
          {/* Add list items here */}
        </ul>
      </div>

      <div id="list2">
        <h2>List 2</h2>
        <ul>
          {/* Add list items here */}
        </ul>
      </div>

      <div id="list3">
        <h2>List 3</h2>
        <ul>
          {/* Add list items here */}
        </ul>
      </div>

      <div id="list4">
        <h2>List 4</h2>
        <ul>
          {/* Add list items here */}
        </ul>
      </div>

      <div id="list5">
        <h2>List 5</h2>
        <ul>
          {/* Add list items here */}
        </ul>
      </div>

      <div id="list6">
        <h2>List 6</h2>
        <ul>
          {/* Add list items here */}
        </ul>
      </div>
    </div>
  );
}

export default Page;
