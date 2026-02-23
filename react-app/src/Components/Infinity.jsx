import "../App.css"

function Infinity() {
    return (
<section class="carousel-section">
  <div class="container">
    <h3 class="section-title">Our <span style={{color: "rgb(78, 35, 35)"}}>TOP </span>Picks</h3>
    <div class="carousel" tabindex="0">
      <div class="carousel-track">
        <div class="pill">Zobo</div>
        <div class="pill">Chapman</div>
        <div class="pill">Kunu</div>
        <div class="pill">Palm Wine</div>
        <div class="pill">Fura da Nono</div>
        <div class="pill">Tigernut Milk</div>
        {/* <!-- duplicated for infinite scroll --> */}
        <div class="pill">Zobo</div>
        <div class="pill">Chapman</div>
        <div class="pill">Kunu</div>
        <div class="pill">Palm Wine</div>
        <div class="pill">Fura da Nono</div>
        <div class="pill">Tigernut Milk</div>
        {/* <!-- duplicated for infinite scroll --> */}
        <div class="pill">Zobo</div>
        <div class="pill">Chapman</div>
        <div class="pill">Kunu</div>
        <div class="pill">Palm Wine</div>
        <div class="pill">Fura da Nono</div>
        <div class="pill">Tigernut Milk</div>
      </div>
    </div>
  </div>
</section>
    );
}

export default Infinity;