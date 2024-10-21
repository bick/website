'use client';

import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import SimplexNoise from 'simplex-noise';

const BlobScene = () => {
    const containerRef = useRef(null);
    const [renderer, setRenderer] = useState(null);
    // @ts-ignore
    const noise = useRef(new SimplexNoise());
    const blobScale = 3;
    const [nucleus, setNucleus] = useState(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Initialize scene, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            55,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.01,
            1000
        );
        camera.position.set(0, 0, 230);

        const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        // Create a simple blob geometry
        const icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10);
        const material = new THREE.MeshPhongMaterial({color: 0x44aa88, flatShading: true});
        const nucleus = new THREE.Mesh(icosahedronGeometry, material);
        scene.add(nucleus);

        // Basic ambient light to show the blob
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        setRenderer(renderer);
        setNucleus(nucleus);

        // Animation loop
        const animate = () => {
            nucleus.geometry.vertices.forEach((v) => {
                const time = Date.now();
                v.normalize();
                const distance =
                    nucleus.geometry.parameters.radius +
                    noise.current.noise3D(v.x + time * 0.0005, v.y + time * 0.0003, v.z + time * 0.0008) *
                    blobScale;
                v.multiplyScalar(distance);
            });

            nucleus.geometry.verticesNeedUpdate = true;
            nucleus.rotation.y += 0.002;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
            if (renderer) {
                renderer.dispose();
            }
        };
    }, [containerRef]);

    return <div ref={containerRef} style={{width: '100%', height: '100vh'}}/>;
};

export default BlobScene;
