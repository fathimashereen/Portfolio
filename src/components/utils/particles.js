import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
    return (
        <Particles
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1, // Ensures particles are behind other content
                },
                particles: {
                    number: {
                        value: 100,
                    },
                    size: {
                        value: 5,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse",
                        },
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                    },
                },
            }}
        />
    );
};

export default ParticleBackground;
