import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function mainNavbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Blogging App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Blog">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/BlogWrite">Write Blog</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default mainNavbar;