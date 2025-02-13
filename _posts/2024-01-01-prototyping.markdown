---
layout: posts
title:  "Prototyping Projects"
tagline: ""
date:   2024-01-01 00:00:00 +0000
tags: [Arduino & Circuitry, Prototyping]
author_profile: true
author: Ryan Christ
highlight_home: true
categories: project
header:
    overlay_image: "/assets/images/MAGLEV.jpg"
    teaser: "/assets/images/MAGLEV.jpg"
description: add
---
Developed several prototypes using PID controllers, Arduino microcontrollers, and laser-cut components to create interactive and functional designs.

# Magnetic Levitation

My group and I designed a control system for a magnetic levitation device to precisely manipulate the position of a ball. We implemented control modes for sine, square wave, and random movements based on user-defined parameters.

* Control System: Developed in LabVIEW, utilizing multiple DAQ Assistants and a Case Structure on the block diagram.
* User Interface: Designed a front panel display with adjustable PID coefficients, voltage, and height monitoring for real-time control.
* Mathematical Modeling: Modeled the system using a set of linear differential equations to derive an overall transfer function.
* Tuning & Optimization: Used MATLAB’s sisotool to tune proportional, integral, and derivative (PID) constants, refining the response further in LabVIEW for improved stability and accuracy.


<div id="nanogallery3"></div>
<script>
  $("#nanogallery3").nanogallery2({
  // ### gallery settings ###
  thumbnailHeight:  150,
  thumbnailWidth:   150,
  itemsBaseURL:     '/assets/images/',

  // ### gallery content ###
  items: [
      { src: 'MAGLEV.jpg', srct: 'MAGLEV.jpg' },
      { src: 'MAGLEVBlockDiagramSine.png', srct: 'MAGLEVBlockDiagramSine.png' },
      { src: 'MAGLEVFrontPanel.png', srct: 'MAGLEVFrontPanel.png' },
  ]
});
</script>
<br>

# Mini Golf Simulator

The mini golf simulator is part of a larger Rube Goldberg machine. The mechanism positions the golf ball via a pipe into the designated “tee” spot. An ultrasonic sensor detects the ball and initiates the sequence.

The automation sequence begins after a 1-second delay. Then, a golf club powered by a servo motor retracts, and a front gate lifts. The servo swings the club to hit the ball as it rolls into the hole. After the ball lands in the hole, a buzzer plays the Olympic theme song as the ball continues on to further assemblies. This project combined sensor automation and mechanical design to successfully contribute to the Rube Goldberg machine.

<div id="nanogallery1"></div>
<script>
  $("#nanogallery1").nanogallery2({
  // ### gallery settings ###
  thumbnailHeight:  150,
  thumbnailWidth:   150,
  itemsBaseURL:     '/assets/images/',

  // ### gallery content ###
  items: [
      { src: 'Golf.jpg', srct: 'Golf.jpg' },
      { src: 'GolfCircuitSkem1.png', srct: 'GolfCircuitSkem1.png' },
      { src: 'GolfCircuitSkem2.png', srct: 'GolfCircuitSkem2.png' },
  ]
});
</script>
<br>

# Spotify Picture Frame

I designed and created a personalized wedding gift for my brother and his wife using Adobe Illustrator, with the design laser-cut on a Trotec laser cutter.

* Spotify Code Integration: Embedded a scannable Spotify barcode to play "Fly Me To The Moon" by Frank Sinatra.
* Two-Plate Design: The design allows a photo to be displayed between two clear acrylic plates.

<div id="nanogallery2"></div>
<script>
  $("#nanogallery2").nanogallery2({
  // ### gallery settings ###
  thumbnailHeight:  150,
  thumbnailWidth:   150,
  itemsBaseURL:     '/assets/images/',

  // ### gallery content ###
  items: [
      { src: 'Spotify.gif', srct: 'Spotify.gif' },
      { src: 'SpotifyAI.png', srct: 'SpotifyAI.png' },
  ]
});
</script>