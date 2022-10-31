import React from "react";

function CategoriesGrid() {
  return (
    <div className="container text-center parent--grid">
      <h1>Popular topics</h1>
      <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
        <div className="col grids-items">
          <a href="#" className="grids-items--item">
            Blender
          </a>
        </div>
        <div className="col grids-items">
          <a href="#" className="grids-items--item">
            PhotoShop
          </a>
        </div>
        <div className="col grids-items">
          <a href="#" className="grids-items--item">
            Adobe Illustrator
          </a>
        </div>
        <div className="col grids-items">
          <a href="#" className="grids-items--item">
            Web Design
          </a>
        </div>
        <div className="col grids-items">
          <a href="#" className="grids-items--item">
            Mobile App Design
          </a>
        </div>
        <div className="col grids-items">
          <a href="#" className="grids-items--item">
            Graphics Design
          </a>
        </div>
        <div className="col grids-items">
          <a href="#" className="grids-items--item">
            3D Modeling
          </a>
        </div>
        <div className="col grids-items">
          <a href="#" className="grids-items--item">
            After Effects
          </a>
        </div>
        <div className="col grids-items">
          <a href="#" className="grids-items--item">
            Drawing
          </a>
        </div>
        <div className="col grids-items">
          <a href="#" className="grids-items--item">
            User Experience Design
          </a>
        </div>
      </div>
    </div>
  );
}
// row row-cols-1 row-cols-sm-2 row-cols-md-5 g-5

export default CategoriesGrid;
