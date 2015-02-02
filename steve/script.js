// Define variables
var ox;
var oy;

// Standard texture size
Generator.setTextureOption('Skin', 'standardWidth',  64);
Generator.setTextureOption('Skin', 'standardHeight', 64);

// Background
Generator.drawImage('Background');

// Head
ox = 74;
oy = 25;
Generator.drawTexture( 'Skin', {x:0,  y:8, w:8, h:8}, {x:ox,     y:oy+64,  w:64, h:64} ); // Right
Generator.drawTexture( 'Skin', {x:8,  y:8, w:8, h:8}, {x:ox+64,  y:oy+64,  w:64, h:64} ); // Face
Generator.drawTexture( 'Skin', {x:16, y:8, w:8, h:8}, {x:ox+128, y:oy+64,  w:64, h:64} ); // Left
Generator.drawTexture( 'Skin', {x:24, y:8, w:8, h:8}, {x:ox+192, y:oy+64,  w:64, h:64} ); // Back
Generator.drawTexture( 'Skin', {x:8,  y:0, w:8, h:8}, {x:ox+64,  y:oy,     w:64, h:64} ); // Top
Generator.drawTexture( 'Skin', {x:16, y:0, w:8, h:8}, {x:ox+64,  y:oy+128, w:64, h:64} ); // Bottom

// Torso
ox = 268;
oy = 201;
Generator.drawTexture( 'Skin', {x:16, y:20,w:4, h:12},{x:ox,     y:oy+32,  w:32, h:96} ); // Right
Generator.drawTexture( 'Skin', {x:20, y:20,w:8, h:12},{x:ox+32,  y:oy+32,  w:64, h:96} ); // Face
Generator.drawTexture( 'Skin', {x:28, y:20,w:4, h:12},{x:ox+96,  y:oy+32,  w:32, h:96} ); // Left
Generator.drawTexture( 'Skin', {x:32, y:20,w:8, h:12},{x:ox+128, y:oy+32,  w:64, h:96} ); // Back
Generator.drawTexture( 'Skin', {x:20, y:16,w:8, h:4}, {x:ox+32,  y:oy,     w:64, h:32} ); // Top
Generator.drawTexture( 'Skin', {x:28, y:16,w:8, h:4}, {x:ox+32,  y:oy+128, w:64, h:32} ); // Bottom

// Right Arm
ox = 99;
oy = 373;
Generator.drawTexture( 'Skin', {x:40, y:20,w:4, h:12},{x:ox,     y:oy+32,  w:32, h:96} ); // Right
Generator.drawTexture( 'Skin', {x:44, y:20,w:4, h:12},{x:ox+32,  y:oy+32,  w:32, h:96} ); // Face
Generator.drawTexture( 'Skin', {x:48, y:20,w:4, h:12},{x:ox+64,  y:oy+32,  w:32, h:96} ); // Left
Generator.drawTexture( 'Skin', {x:52, y:20,w:4, h:12},{x:ox+96,  y:oy+32,  w:32, h:96} ); // Back
Generator.drawTexture( 'Skin', {x:44, y:16,w:4, h:4}, {x:ox+32,  y:oy,     w:32, h:32} ); // Top
Generator.drawTexture( 'Skin', {x:48, y:16,w:4, h:4}, {x:ox+32,  y:oy+128, w:32, h:32} ); // Bottom

// Left Arm
ox = 415;
oy = 373;
Generator.drawTexture( 'Skin', {x:32, y:52,w:4, h:12},{x:ox,     y:oy+32,  w:32, h:96} ); // Right
Generator.drawTexture( 'Skin', {x:36, y:52,w:4, h:12},{x:ox+32,  y:oy+32,  w:32, h:96} ); // Face
Generator.drawTexture( 'Skin', {x:40, y:52,w:4, h:12},{x:ox+64,  y:oy+32,  w:32, h:96} ); // Left
Generator.drawTexture( 'Skin', {x:44, y:52,w:4, h:12},{x:ox-32,  y:oy+32,  w:32, h:96} ); // Back
Generator.drawTexture( 'Skin', {x:36, y:48,w:4, h:4}, {x:ox+32,  y:oy,     w:32, h:32} ); // Top
Generator.drawTexture( 'Skin', {x:40, y:48,w:4, h:4}, {x:ox+32,  y:oy+128, w:32, h:32} ); // Bottom

// Right Leg
ox = 99;
oy = 587;
Generator.drawTexture( 'Skin', {x:0,  y:20,w:4, h:12},{x:ox,     y:oy+32,  w:32, h:96} ); // Right
Generator.drawTexture( 'Skin', {x:4,  y:20,w:4, h:12},{x:ox+32,  y:oy+32,  w:32, h:96} ); // Face
Generator.drawTexture( 'Skin', {x:8,  y:20,w:4, h:12},{x:ox+64,  y:oy+32,  w:32, h:96} ); // Left
Generator.drawTexture( 'Skin', {x:12, y:20,w:4, h:12},{x:ox+96,  y:oy+32,  w:32, h:96} ); // Back
Generator.drawTexture( 'Skin', {x:4,  y:16,w:4, h:4}, {x:ox+32,  y:oy,     w:32, h:32} ); // Top
Generator.drawTexture( 'Skin', {x:8,  y:16,w:4, h:4}, {x:ox+32,  y:oy+128, w:32, h:32} ); // Bottom

// Left Leg
ox = 415;
oy = 587;
Generator.drawTexture( 'Skin', {x:16, y:52,w:4, h:12},{x:ox,     y:oy+32,  w:32, h:96} ); // Right
Generator.drawTexture( 'Skin', {x:20, y:52,w:4, h:12},{x:ox+32,  y:oy+32,  w:32, h:96} ); // Face
Generator.drawTexture( 'Skin', {x:24, y:52,w:4, h:12},{x:ox+64,  y:oy+32,  w:32, h:96} ); // Left
Generator.drawTexture( 'Skin', {x:28, y:52,w:4, h:12},{x:ox-32,  y:oy+32,  w:32, h:96} ); // Back
Generator.drawTexture( 'Skin', {x:20, y:48,w:4, h:4}, {x:ox+32,  y:oy,     w:32, h:32} ); // Top
Generator.drawTexture( 'Skin', {x:24, y:48,w:4, h:4}, {x:ox+32,  y:oy+128, w:32, h:32} ); // Bottom

// Make solid colours transparent
Generator.setTextureOption('Skin', 'solidColorIsTransparent', true);

// Head2
ox = 74;
oy = 25;
Generator.drawTexture( 'Skin', {x:32, y:8, w:8, h:8}, {x:ox,     y:oy+64,  w:64, h:64} ); // Right
Generator.drawTexture( 'Skin', {x:40, y:8, w:8, h:8}, {x:ox+64,  y:oy+64,  w:64, h:64} ); // Face
Generator.drawTexture( 'Skin', {x:48, y:8, w:8, h:8}, {x:ox+128, y:oy+64,  w:64, h:64} ); // Left
Generator.drawTexture( 'Skin', {x:56, y:8, w:8, h:8}, {x:ox+192, y:oy+64,  w:64, h:64} ); // Back
Generator.drawTexture( 'Skin', {x:40, y:0, w:8, h:8}, {x:ox+64,  y:oy,     w:64, h:64} ); // Top
Generator.drawTexture( 'Skin', {x:48, y:0, w:8, h:8}, {x:ox+64,  y:oy+128, w:64, h:64} ); // Bottom

// Torso2
ox = 268;
oy = 201;
Generator.drawTexture( 'Skin', {x:16, y:36,w:4, h:12},{x:ox,     y:oy+32,  w:32, h:96} ); // Right
Generator.drawTexture( 'Skin', {x:20, y:36,w:8, h:12},{x:ox+32,  y:oy+32,  w:64, h:96} ); // Face
Generator.drawTexture( 'Skin', {x:28, y:36,w:4, h:12},{x:ox+96,  y:oy+32,  w:32, h:96} ); // Left
Generator.drawTexture( 'Skin', {x:32, y:36,w:8, h:12},{x:ox+128, y:oy+32,  w:64, h:96} ); // Back
Generator.drawTexture( 'Skin', {x:20, y:32,w:8, h:4}, {x:ox+32,  y:oy,     w:64, h:32} ); // Top
Generator.drawTexture( 'Skin', {x:28, y:32,w:8, h:4}, {x:ox+32,  y:oy+128, w:64, h:32} ); // Bottom

// Right Arm2
ox = 99;
oy = 373;
Generator.drawTexture( 'Skin', {x:40, y:36,w:4, h:12},{x:ox,     y:oy+32,  w:32, h:96} ); // Right
Generator.drawTexture( 'Skin', {x:44, y:36,w:4, h:12},{x:ox+32,  y:oy+32,  w:32, h:96} ); // Face
Generator.drawTexture( 'Skin', {x:48, y:36,w:4, h:12},{x:ox+64,  y:oy+32,  w:32, h:96} ); // Left
Generator.drawTexture( 'Skin', {x:52, y:36,w:4, h:12},{x:ox+96,  y:oy+32,  w:32, h:96} ); // Back
Generator.drawTexture( 'Skin', {x:44, y:32,w:4, h:4}, {x:ox+32,  y:oy,     w:32, h:32} ); // Top
Generator.drawTexture( 'Skin', {x:48, y:32,w:4, h:4}, {x:ox+32,  y:oy+128, w:32, h:32} ); // Bottom

// Left Arm2
ox = 415;
oy = 373;
Generator.drawTexture( 'Skin', {x:48, y:52,w:4, h:12},{x:ox,     y:oy+32,  w:32, h:96} ); // Right
Generator.drawTexture( 'Skin', {x:52, y:52,w:4, h:12},{x:ox+32,  y:oy+32,  w:32, h:96} ); // Face
Generator.drawTexture( 'Skin', {x:56, y:52,w:4, h:12},{x:ox+64,  y:oy+32,  w:32, h:96} ); // Left
Generator.drawTexture( 'Skin', {x:60, y:52,w:4, h:12},{x:ox-32,  y:oy+32,  w:32, h:96} ); // Back
Generator.drawTexture( 'Skin', {x:52, y:48,w:4, h:4}, {x:ox+32,  y:oy,     w:32, h:32} ); // Top
Generator.drawTexture( 'Skin', {x:56, y:48,w:4, h:4}, {x:ox+32,  y:oy+128, w:32, h:32} ); // Bottom

// Right Leg2
ox = 99;
oy = 587;
Generator.drawTexture( 'Skin', {x:0,  y:36,w:4, h:12},{x:ox,     y:oy+32,  w:32, h:96} ); // Right
Generator.drawTexture( 'Skin', {x:4,  y:36,w:4, h:12},{x:ox+32,  y:oy+32,  w:32, h:96} ); // Face
Generator.drawTexture( 'Skin', {x:8,  y:36,w:4, h:12},{x:ox+64,  y:oy+32,  w:32, h:96} ); // Left
Generator.drawTexture( 'Skin', {x:12, y:36,w:4, h:12},{x:ox+96,  y:oy+32,  w:32, h:96} ); // Back
Generator.drawTexture( 'Skin', {x:4,  y:32,w:4, h:4}, {x:ox+32,  y:oy,     w:32, h:32} ); // Top
Generator.drawTexture( 'Skin', {x:8,  y:32,w:4, h:4}, {x:ox+32,  y:oy+128, w:32, h:32} ); // Bottom

// Left Leg2
ox = 415;
oy = 587;
Generator.drawTexture( 'Skin', {x:0,  y:52,w:4, h:12},{x:ox,     y:oy+32,  w:32, h:96} ); // Right
Generator.drawTexture( 'Skin', {x:4,  y:52,w:4, h:12},{x:ox+32,  y:oy+32,  w:32, h:96} ); // Face
Generator.drawTexture( 'Skin', {x:8,  y:52,w:4, h:12},{x:ox+64,  y:oy+32,  w:32, h:96} ); // Left
Generator.drawTexture( 'Skin', {x:12, y:52,w:4, h:12},{x:ox-32,  y:oy+32,  w:32, h:96} ); // Back
Generator.drawTexture( 'Skin', {x:4,  y:48,w:4, h:4}, {x:ox+32,  y:oy,     w:32, h:32} ); // Top
Generator.drawTexture( 'Skin', {x:8,  y:48,w:4, h:4}, {x:ox+32,  y:oy+128, w:32, h:32} ); // Bottom

// Fold Lines
Generator.drawImage('Folds');

// Labels
Generator.drawImage('Labels');
