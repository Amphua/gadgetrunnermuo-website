import Script from 'next/script';

export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <>


<header className="header">



   <nav className="navbar">

      <a href="#home" className="logo">
         <img className="logo-mark" src="images/gadget-runner-logo.png?v=2" alt="Gadget Runner MUO" />
      </a>

      <div className="links">
         <a href="#home">Halaman</a>
         <a href="#about">Pengenalan</a>
         <a href="#services">Servis</a>
         <a href="#gallery">Galeri</a>
         <a href="#team">Team</a>
         <a href="#reviews">Review</a>
         <a href="#contact">Hubungi Kami</a>
      </div>

      <div className="nav-actions">
         <button className="theme-toggle" id="theme-toggle" type="button" aria-label="Switch to dark mode" aria-pressed="false" title="Switch to dark mode">
            <i className="fas fa-moon" aria-hidden="true"></i>
         </button>
         <button id="menu-btn" className="fas fa-bars" type="button" aria-label="Open navigation menu" aria-expanded="false"></button>
      </div>

   </nav>

</header>

<section className="home" id="home">

   <div className="image">
      <img src="images/workshop.jpg" alt="Technician's workbench for phone and laptop repairs" />
      <span className="photo-note"><i className="fas fa-microchip" aria-hidden="true"></i> Baiki dengan teliti, setiap hari</span>
   </div>

   <div className="content">
      <p className="eyebrow"><span></span> Pusat servis gadget · Muar, Johor</p>
      <h1>Gadget rosak?<br /><span>Kami baiki.</span></h1>
      <p>Kami membaiki telefon, laptop, PC dan printer dengan servis yang teliti, harga berpatutan, serta pilihan runner untuk kemudahan anda.</p>
      <div className="hero-actions">
         <a href="https://wa.link/uylr6u" className="btn" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-hidden="true"></i> Tanya melalui WhatsApp</a>
         <a href="#services" className="text-link">Lihat servis <i className="fas fa-arrow-right" aria-hidden="true"></i></a>
      </div>
      <div className="hero-proof">
         <span><i className="fas fa-check-circle" aria-hidden="true"></i> Waranti tersedia</span>
         <span><i className="fas fa-map-marker-alt" aria-hidden="true"></i> 2 cawangan</span>
      </div>
   </div>


</section>

<section className="about" id="about">

   <div className="content">
      <p className="eyebrow"><span></span> Tentang kami · Muar, Johor</p>
      <h3>Servis gadget,<br /><span>lebih mudah.</span></h3>
      <p className="about-intro">Tak sempat ke kedai? Kami sediakan servis runner untuk memudahkan urusan anda. Kami juga menjual telefon baharu dan terpakai—semuanya dengan layanan mesra dan servis yang boleh dipercayai.</p>

      <div className="about-highlights">
         <div className="about-highlight">
            <span className="about-highlight-icon"><i className="fas fa-motorcycle" aria-hidden="true"></i></span>
            <div>
               <h4>Servis runner</h4>
               <p>Baiki gadget tanpa perlu keluar rumah.</p>
            </div>
            <i className="fas fa-arrow-right about-highlight-arrow" aria-hidden="true"></i>
         </div>
         <div className="about-highlight">
            <span className="about-highlight-icon"><i className="fas fa-mobile-alt" aria-hidden="true"></i></span>
            <div>
               <h4>Telefon baharu &amp; terpakai</h4>
               <p>Pilihan telefon untuk keperluan anda.</p>
            </div>
            <i className="fas fa-arrow-right about-highlight-arrow" aria-hidden="true"></i>
         </div>
      </div>

      <div className="about-actions">
         <a href="https://wa.link/uylr6u" className="btn" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-hidden="true"></i> Tanya kami</a>
         <a href="#services" className="text-link">Lihat servis <i className="fas fa-arrow-right" aria-hidden="true"></i></a>
      </div>
   </div>
   <div className="image">
      <img src="images/sold.jpg" alt="Pelanggan berpuas hati dengan pembelian telefon di Gadget Runner MUO" />
      <div className="about-image-badge"><i className="fas fa-check-circle" aria-hidden="true"></i> Pilihan pelanggan</div>
   </div>
</section>

<section className="services" id="services">

   <div className="services-heading">
      <div>
         <p className="eyebrow"><span></span> Apa yang kami baiki</p>
         <h1 className="heading">Servis untuk <span>setiap gadget.</span></h1>
      </div>
      <p className="services-intro">Dari telefon hingga komputer, pasukan kami sedia membantu mengembalikan peranti anda.</p>
   </div>

   <div className="service-grid">

      <article className="service-card">
         <div className="service-card-top">
            <span className="service-icon"><img src="images/service-1.svg" alt="" aria-hidden="true" /></span>
            <span className="service-number">01</span>
         </div>
         <h2>Laptop &amp; PC</h2>
         <p>Pembaikan komputer riba dan PC, termasuk binaan custom mengikut keperluan anda.</p>
         <a href="https://wa.link/uylr6u" target="_blank" rel="noopener noreferrer" aria-label="Tanya tentang servis laptop dan PC">Tanya servis <i className="fas fa-arrow-right" aria-hidden="true"></i></a>
      </article>

      <article className="service-card">
         <div className="service-card-top">
            <span className="service-icon"><img src="images/service-2.svg" alt="" aria-hidden="true" /></span>
            <span className="service-number">02</span>
         </div>
         <h2>Motherboard</h2>
         <p>Kepakaran membaiki papan induk dan komponen elektronik dengan teliti.</p>
         <a href="https://wa.link/uylr6u" target="_blank" rel="noopener noreferrer" aria-label="Tanya tentang servis motherboard">Tanya servis <i className="fas fa-arrow-right" aria-hidden="true"></i></a>
      </article>

      <article className="service-card">
         <div className="service-card-top">
            <span className="service-icon"><img src="images/service-3.svg" alt="" aria-hidden="true" /></span>
            <span className="service-number">03</span>
         </div>
         <h2>Telefon pintar</h2>
         <p>Servis telefon termasuk penggantian skrin LCD, bateri dan banyak lagi.</p>
         <a href="https://wa.link/uylr6u" target="_blank" rel="noopener noreferrer" aria-label="Tanya tentang servis telefon pintar">Tanya servis <i className="fas fa-arrow-right" aria-hidden="true"></i></a>
      </article>

      <article className="service-card">
         <div className="service-card-top">
            <span className="service-icon"><img src="images/printer.png" alt="" aria-hidden="true" /></span>
            <span className="service-number">04</span>
         </div>
         <h2>Pencetak</h2>
         <p>Pemeriksaan dan pembaikan asas pencetak untuk kegunaan harian anda.</p>
         <a href="https://wa.link/uylr6u" target="_blank" rel="noopener noreferrer" aria-label="Tanya tentang servis pencetak">Tanya servis <i className="fas fa-arrow-right" aria-hidden="true"></i></a>
      </article>

   </div>

</section>

<section className="gallery" id="gallery">

   <div className="gallery-heading">
      <div>
         <p className="eyebrow"><span></span> Intai ruang kerja kami</p>
         <h1 className="heading">Dari kedai, <span>untuk anda.</span></h1>
      </div>
      <p className="gallery-intro">Suasana kedai dan ruang kerja Gadget Runner MUO—lihat sendiri bagaimana kami menjaga setiap gajet.</p>
   </div>

   <div className="gallery-carousel" data-gallery role="region" aria-label="Galeri foto kedai dan ruang kerja" aria-roledescription="slideshow">
      <div className="gallery-stage" tabIndex="0" aria-label="Galeri foto kedai dan ruang kerja">
         <img className="gallery-main-image" src="images/store-workshop.jpg" alt="Ruang kerja pembaikan di Gadget Runner MUO" fetchPriority="high" />
         <div className="gallery-shade"></div>
         <div className="gallery-caption" aria-live="polite">
            <span className="gallery-count">01 / 11</span>
            <h2 className="gallery-title">Ruang kerja kami</h2>
            <p className="gallery-description">Ruang membaiki dan menyediakan gajet untuk pelanggan.</p>
         </div>
         <div className="gallery-controls">
            <button className="gallery-control" type="button" data-gallery-previous aria-label="Foto sebelumnya"><i className="fas fa-arrow-left" aria-hidden="true"></i></button>
            <button className="gallery-control" type="button" data-gallery-next aria-label="Foto seterusnya"><i className="fas fa-arrow-right" aria-hidden="true"></i></button>
         </div>
         <span className="gallery-kicker"><i className="fas fa-map-marker-alt" aria-hidden="true"></i> Muar, Johor</span>
      </div>

      <div className="gallery-bottom">
         <div className="gallery-summary">
            <span className="gallery-progress" aria-hidden="true"><span></span></span>
            <p><strong data-gallery-current>01</strong> <span>/ 11 foto</span></p>
         </div>
         <div className="gallery-thumbnails" aria-label="Pilih foto galeri">
            <button className="gallery-thumbnail" type="button" data-gallery-slide data-title="Ruang kerja kami" data-description="Ruang membaiki dan menyediakan gajet untuk pelanggan." data-alt="Ruang kerja pembaikan di Gadget Runner MUO" aria-label="Papar foto 1: Ruang kerja kami" aria-pressed="true"><img src="images/store-workshop.jpg" alt="" loading="lazy" /></button>
            <button className="gallery-thumbnail" type="button" data-gallery-slide data-title="Ruang kedai" data-description="Suasana kedai dan ruang kerja dari bahagian hadapan." data-alt="Ruang kedai Gadget Runner MUO dilihat dari hadapan" aria-label="Papar foto 2: Ruang kedai" aria-pressed="false"><img src="images/store-interior.jpg" alt="" loading="lazy" /></button>
            <button className="gallery-thumbnail" type="button" data-gallery-slide data-title="Meja pembaikan" data-description="Peralatan dan ruang kerja untuk pemeriksaan gajet." data-alt="Ruang kerja teknikal dengan komputer dan peralatan" aria-label="Papar foto 3: Meja pembaikan" aria-pressed="false"><img src="images/storefront-workbench.jpg" alt="" loading="lazy" /></button>
            <button className="gallery-thumbnail" type="button" data-gallery-slide data-title="Ruang servis" data-description="Kemudahan untuk pemeriksaan dan pembaikan peranti." data-alt="Meja servis di Gadget Runner MUO" aria-label="Papar foto 4: Ruang servis" aria-pressed="false"><img src="images/repair-workbench.jpg" alt="" loading="lazy" /></button>
            <button className="gallery-thumbnail" type="button" data-gallery-slide data-title="Kaunter kedai" data-description="Kaunter hadapan dan pilihan aksesori untuk pelanggan." data-alt="Kaunter kedai dengan printer dan aksesori" aria-label="Papar foto 5: Kaunter kedai" aria-pressed="false"><img src="images/repair-counter.jpg" alt="" loading="lazy" /></button>
            <button className="gallery-thumbnail" type="button" data-gallery-slide data-title="Pembaikan terperinci" data-description="Mikroskop membantu kerja pembaikan komponen dengan teliti." data-alt="Mikroskop teknikal di atas meja pembaikan" aria-label="Papar foto 6: Pembaikan terperinci" aria-pressed="false"><img src="images/repair-microscope.jpg" alt="" loading="lazy" /></button>
            <button className="gallery-thumbnail" type="button" data-gallery-slide data-title="Stesen pembaikan" data-description="Ruang kerja lengkap untuk pelbagai servis gajet." data-alt="Stesen pembaikan dengan monitor dan peralatan elektronik" aria-label="Papar foto 7: Stesen pembaikan" aria-pressed="false"><img src="images/repair-station.jpg" alt="" loading="lazy" /></button>
            <button className="gallery-thumbnail" type="button" data-gallery-slide data-title="Ruang pameran" data-description="Ruang untuk melihat produk dan mendapatkan khidmat kami." data-alt="Ruang pameran produk di dalam kedai" aria-label="Papar foto 8: Ruang pameran" aria-pressed="false"><img src="images/store-display.jpg" alt="" loading="lazy" /></button>
            <button className="gallery-thumbnail" type="button" data-gallery-slide data-title="Gadget Runner MUAR" data-description="Papan tanda kedai kami di Muar." data-alt="Papan tanda Gadget Runner MUAR di hadapan kedai" aria-label="Papar foto 9: Gadget Runner MUAR" aria-pressed="false"><img src="images/storefront.jpg" alt="" loading="lazy" /></button>
            <button className="gallery-thumbnail" type="button" data-gallery-slide data-title="Ruang menunggu" data-description="Ruang santai untuk pelanggan yang berkunjung." data-alt="Ruang menunggu dan kaunter penerimaan pelanggan" aria-label="Papar foto 10: Ruang menunggu" aria-pressed="false"><img src="images/store-lobby.jpg" alt="" loading="lazy" /></button>
            <button className="gallery-thumbnail" type="button" data-gallery-slide data-title="Pintu masuk kedai" data-description="Singgah ke kedai kami untuk servis dan pertanyaan." data-alt="Pintu masuk premis Gadget Runner MUO" aria-label="Papar foto 11: Pintu masuk kedai" aria-pressed="false"><img src="images/store-entrance.jpg" alt="" loading="lazy" /></button>
         </div>
      </div>
   </div>

</section>

<section className="facilities">

   <div className="facilities-heading">
      <div>
         <p className="eyebrow"><span></span> Keyakinan anda keutamaan kami</p>
         <h1 className="heading">Kenapa pilih <span>kami?</span></h1>
      </div>
      <p className="facilities-intro">Kami mahu anda rasa yakin dan selesa pada setiap langkah—daripada pertanyaan hingga peranti siap dibaiki.</p>
   </div>

   <div className="facility-grid">

      <article className="facility-card">
         <span className="facility-number">01 / JAMINAN</span>
         <span className="facility-icon"><img src="images/warranty.png" alt="" aria-hidden="true" /></span>
         <h2>Waranti disediakan</h2>
         <p>Komponen perkakasan yang diganti, seperti LCD dan bateri, disertakan waranti tertakluk pada terma dan syarat.</p>
      </article>

      <article className="facility-card">
         <span className="facility-number">02 / KUALITI</span>
         <span className="facility-icon"><img src="images/software.png" alt="" aria-hidden="true" /></span>
         <h2>Servis berkualiti</h2>
         <p>Setiap peranti dikendalikan dengan teliti, dengan fokus pada hasil kerja yang kemas dan boleh dipercayai.</p>
      </article>

      <article className="facility-card">
         <span className="facility-number">03 / TERBUKA</span>
         <span className="facility-icon"><img src="images/seller.png" alt="" aria-hidden="true" /></span>
         <h2>Pembaikan depan mata</h2>
         <p>Anda boleh melihat sendiri proses pembaikan dan bertanya kepada kami tentang kerja yang dilakukan.</p>
      </article>

   </div>

</section>

<section className="team" id="team">

   <div className="team-heading">
      <div>
         <p className="eyebrow"><span></span> Pasukan kami</p>
         <h1 className="heading">Kenali pakar <span>kami.</span></h1>
      </div>
      <p className="team-intro">Pasukan mesra yang sedia membantu dengan servis gadget dan kepakaran masing-masing.</p>
   </div>

   <div className="team-grid">

      <article className="team-card">
         <div className="team-portrait">
            <img src="images/team2.png" alt="Azlan Zulfadli" />
            <span className="team-index">01</span>
         </div>
         <div className="team-content">
            <h3>Azlan Zulfadli</h3>
            <p>Sales Person</p>
            <div className="team-socials">
               <a href="https://www.facebook.com/fadlyjanuri" className="fab fa-facebook-f" aria-label="Facebook Azlan Zulfadli"></a>
            </div>
         </div>
      </article>

      <article className="team-card">
         <div className="team-portrait">
            <img src="images/team1.png" alt="Asyraf" />
            <span className="team-index">02</span>
         </div>
         <div className="team-content">
            <h3>Asyraf</h3>
            <p>Mainboard/Motherboard Expert</p>
            <div className="team-socials">
               <a href="https://www.facebook.com/ashnino92" className="fab fa-facebook-f" aria-label="Facebook Asyraf"></a>
               <a href="https://www.instagram.com/ashnino/" className="fab fa-instagram" aria-label="Instagram Asyraf"></a>
            </div>
         </div>
      </article>

      <article className="team-card">
         <div className="team-portrait">
            <img src="images/team4.png" alt="Solihin" />
            <span className="team-index">03</span>
         </div>
         <div className="team-content">
            <h3>Solihin</h3>
            <p>Computer Expert</p>
            <div className="team-socials">
               <a href="https://www.facebook.com/muhamad.solihin.91" className="fab fa-facebook-f" aria-label="Facebook Solihin"></a>
            </div>
         </div>
      </article>

      <article className="team-card">
         <div className="team-portrait">
            <img src="images/team3.png" alt="Yasin" />
            <span className="team-index">04</span>
         </div>
         <div className="team-content">
            <h3>Yasin</h3>
            <p>Mobile Phone Expert</p>
            <div className="team-socials">
               <a href="https://www.facebook.com/ciksemutpelangi" className="fab fa-facebook-f" aria-label="Facebook Yasin"></a>
            </div>
         </div>
      </article>

      <article className="team-card">
         <div className="team-portrait">
            <img className="team-portrait-amin" src="images/team7.png" alt="Amin" />
            <span className="team-index">05</span>
         </div>
         <div className="team-content">
            <h3>Amin</h3>
            <p>Technician</p>
         </div>
      </article>

   </div>

</section>

<section className="reviews" id="reviews">

   <div className="reviews-heading">
      <div>
         <p className="eyebrow"><span></span> Kata pelanggan</p>
         <h1 className="heading">Pengalaman <span>sebenar.</span></h1>
      </div>
      <p className="reviews-intro">Lihat apa yang pelanggan kami katakan tentang servis dan layanan di Gadget Runner MUO.</p>
   </div>

   <div className="box-container">

      <article className="box review-card">
         <div className="star" role="img" aria-label="5 daripada 5 bintang">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
         </div>
         <div className="text">
            <i className="fas fa-quote-right" aria-hidden="true"></i>
            <p>The best place to fix your phone and laptop. Price quite affordable than others</p>
         </div>
         <div className="user">
            <img src="images/profile.png" alt="" />
            <h3>Sha al-Fawaz</h3>
         </div>
      </article>

      <article className="box review-card">
         <div className="star" role="img" aria-label="5 daripada 5 bintang">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
         </div>
         <div className="text">
            <i className="fas fa-quote-right" aria-hidden="true"></i>
            <p>Just changed the iphone lcd here
               Reasonable service price
               Good staff not arrogant
               Recommended</p>
         </div>
         <div className="user">
            <img src="images/profile2.png" alt="" width="100" />
            <h3>Muzhaffar Jasman</h3>
         </div>
      </article>

      <article className="box review-card">
         <div className="star" role="img" aria-label="5 daripada 5 bintang">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
         </div>
         <div className="text">
            <i className="fas fa-quote-right" aria-hidden="true"></i>
            <p>Send iPhone repairs to this shop. Alhamdulillah the phone can turn on. Diorg only charges for the cleaning service</p>
         </div>
         <div className="user">
            <img src="images/profile3.png" alt="" />
            <h3>Rohizan Ismail</h3>
         </div>
      </article>

      <article className="box review-card">
         <div className="star" role="img" aria-label="5 daripada 5 bintang">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
         </div>
         <div className="text">
            <i className="fas fa-quote-right" aria-hidden="true"></i>
            <p>Best place for phone repair. Honest and genuine service.</p>
         </div>
         <div className="user">
            <img src="images/profile4.png" alt="" width="100" />
            <h3>Chi Jia Qing</h3>
         </div>
      </article>

      <article className="box review-card">
         <div className="star" role="img" aria-label="5 daripada 5 bintang">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
         </div>
         <div className="text">
            <i className="fas fa-quote-right" aria-hidden="true"></i>
            <p>Good servis with affordable price</p>
         </div>
         <div className="user">
            <img src="images/profile5.png" alt="" width="100" />
            <h3>Norafifah Tarmizi96</h3>
         </div>
      </article>

      <article className="box review-card">
         <div className="star" role="img" aria-label="4 daripada 5 bintang">

            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
         </div>
         <div className="text">
            <i className="fas fa-quote-right" aria-hidden="true"></i>
            <p>Good hospitality and good services to get your phone repaired.</p>
         </div>
         <div className="user">
            <img src="images/profile6.png" alt="" width="100" />
            <h3>Amani Sanchez</h3>
         </div>
      </article>

   </div>

</section>

<section className="contact" id="contact">

   <h1 className="heading"> <span>Lokasi</span> Kami </h1>

   <div className="row">
      <div className="location">
         <h2>Lokasi di Jalan Othman</h2>
         <a className="location-photo-link" href="https://www.google.com/maps/dir/?api=1&amp;destination=Gadget+Runner+Muar%2C+Jalan+Othman%2C+Muar%2C+Johor" target="_blank" rel="noopener noreferrer" aria-label="Buka navigasi ke Gadget Runner MUO, Jalan Othman">
            <img src="images/location-jalan-othman.jpg" alt="Bahagian hadapan Gadget Runner MUO di Jalan Othman" />
            <span className="location-photo-action"><i className="fas fa-directions" aria-hidden="true"></i> Buka navigasi</span>
         </a>
      </div>
      <div className="location">
         <h2>Lokasi di Parit Kadzi</h2>
         <a className="location-photo-link" href="https://www.google.com/maps/dir/?api=1&amp;destination=Gadget+Runner+MUO%2C+Parit+Kadzi%2C+Muar%2C+Johor" target="_blank" rel="noopener noreferrer" aria-label="Buka navigasi ke Gadget Runner MUO, Parit Kadzi">
            <img src="images/location-parit-kadzi.jpg" alt="Bahagian hadapan Gadget Runner MUO di Parit Kadzi" />
            <span className="location-photo-action"><i className="fas fa-directions" aria-hidden="true"></i> Buka navigasi</span>
         </a>
      </div>
   </div>



</section>

<section className="footer">

   <div className="footer-inner">
      <div className="footer-cta">
         <div>
            <p className="eyebrow"><span></span> Gadget Runner MUO · Muar</p>
            <h2>Gadget bermasalah?<br /><span>Kami sedia membantu.</span></h2>
         </div>
         <a href="https://wa.link/uylr6u" className="btn" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-hidden="true"></i> Hubungi kami</a>
      </div>

      <div className="footer-details">
         <nav className="footer-nav" aria-label="Pautan footer">
            <h3>Pautan pantas</h3>
            <a href="#services">Servis</a>
            <a href="#gallery">Galeri</a>
            <a href="#team">Pasukan</a>
            <a href="#reviews">Ulasan</a>
         </nav>

         <div className="footer-contact">
            <h3>Hubungi</h3>
            <a href="tel:+601132376197"><i className="fas fa-phone" aria-hidden="true"></i> +6011-32376197</a>
            <a href="mailto:gadgetrunnermuo@gmail.com"><i className="fas fa-envelope" aria-hidden="true"></i> gadgetrunnermuo@gmail.com</a>
            <a href="#contact"><i className="fas fa-map-marker-alt" aria-hidden="true"></i> 2 lokasi di Muar</a>
         </div>

         <div className="footer-hours">
            <h3>Waktu operasi</h3>
            <p><span>Isnin–Sabtu</span> 10:30 pagi–6:30 petang</p>
            <p><span>Ahad</span> 12:00 pagi–6:00 petang</p>
         </div>

         <div className="footer-social">
            <h3>Ikuti kami</h3>
            <div className="share">
               <a href="https://www.facebook.com/GADGETRUNNERMUO/" className="fab fa-facebook-f" target="_blank" rel="noopener noreferrer" aria-label="Facebook Gadget Runner MUO"></a>
               <a href="https://www.instagram.com/gadgetrunnermuar/" className="fab fa-instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram Gadget Runner MUO"></a>
               <a href="https://www.tiktok.com/@gadgetrunnermuo" className="fab fa-tiktok" target="_blank" rel="noopener noreferrer" aria-label="TikTok Gadget Runner MUO"></a>
               <a href="https://t.me/phonebajetmuar" className="fab fa-telegram" target="_blank" rel="noopener noreferrer" aria-label="Telegram Gadget Runner MUO"></a>
            </div>
         </div>
      </div>
   </div>

   <div className="footer-bottom">
      <span>© 2026 am</span>
      <a href="#home">Kembali ke atas <i className="fas fa-arrow-up" aria-hidden="true"></i></a>
   </div>
</section>
<a href="https://wa.link/uylr6u" className="floating" popover="manual" target="_blank" rel="noopener noreferrer" aria-label="Hubungi kami melalui WhatsApp">
  <i className="fab fa-whatsapp" aria-hidden="true"></i>
  <span>Chat dengan kami</span>
</a>

      <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  );
}