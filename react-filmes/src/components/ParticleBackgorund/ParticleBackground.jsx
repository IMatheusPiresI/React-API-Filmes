import React from "react";
import Particles from 'react-tsparticles'
import { ContainerParticle } from "./ParticleBackgroundStyle";

const ParticleBackground = () =>{
    return(
        <ContainerParticle>
            <Particles
                options={{
                        particles: {
                          number: {
                            value: 40,
                            density: {
                              enable: true,
                              value_area: 300
                            }
                          },
                          color: {
                            value: "#ffffff"
                          },
                          shape: {
                            type: "circle",
                            stroke: {
                              width: 0,
                              color: "#000000"
                            },
                            polygon: {
                              nb_sides: 5
                            },
                            image: {
                              src: "img/github.svg",
                              width: 2,
                              height: 2
                            }
                          },
                          opacity: {
                            value: 0,
                            random: false,
                            anim: {
                              enable: false,
                              speed: 1,
                              opacity_min: 0.1,
                              sync: false
                            }
                          },
                          size: {
                            value: 2,
                            random: false,
                            anim: {
                              enable: false,
                              speed: 0,
                              size_min: 0,
                              sync: false
                            }
                          },
                          line_linked: {
                            enable: true,
                            distance: 20,
                            color: "#ffffff",
                            opacity: 1,
                            width: 10.025590456491422
                          },
                          move: {
                            enable: true,
                            speed: 1.5,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                              enable: false,
                              rotateX: 100.3648243462092,
                              rotateY: 1200
                            }
                          }
                        },
                        interactivity: {
                          detect_on: "canvas",
                          events: {
                            onhover: {
                              enable: true,
                              mode: "grab"
                            },
                            onclick: {
                              enable: true,
                              mode: "push"
                            },
                            resize: true
                          },
                          modes: {
                            grab: {
                              distance: 97.44926547616143,
                              line_linked: {
                                opacity: 0.1
                              }
                            },
                            repulse: {
                              distance: 203,
                              duration: 0.4
                            },
                            push: {
                              particles_nb: 4
                            },
                            remove: {
                              particles_nb: 2
                        },
                        retina_detect: true
                      }}
                }}
            />
        </ContainerParticle>
    )
}

export default ParticleBackground;