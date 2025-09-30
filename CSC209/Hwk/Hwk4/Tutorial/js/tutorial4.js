const canvas = document.getElementById("myCanvas");

const face = canvas.getContext("2d");
face.beginPath();
face.arc(21, 379, 20, 0, 2 * Math.PI);
face.fillStyle = "#E6A8CB";
face.fill();
face.lineWidth = 1;
face.strokeStyle = "#9C738C";
face.stroke();

const eye1 = canvas.getContext("2d");
eye1.beginPath();
eye1.arc(16, 374, 2.5, 0, 2 * Math.PI);
eye1.fillStyle = "black";
eye1.fill();

const eye2 = canvas.getContext("2d");
eye2.beginPath();
eye2.arc(26, 374, 2.5, 0, 2 * Math.PI);
eye2.fillStyle = "black";
eye2.fill();

const smile = canvas.getContext("2d");
smile.beginPath();
smile.arc(21, 384, 10, 0, Math.PI);
smile.strokeStyle = "black";
smile.stroke();

const mickeyFace = canvas.getContext("2d");
mickeyFace.beginPath();
mickeyFace.arc(200, 200, 100, 0, 2 * Math.PI);
mickeyFace.fillStyle = "#B2E1EB";
mickeyFace.fill();
mickeyFace.lineWidth = 1;
mickeyFace.strokeStyle = "#73959C";
mickeyFace.stroke();

const mikeyEar1 = canvas.getContext("2d");
mikeyEar1.beginPath();
mikeyEar1.arc(113, 100, 50, 0, 2 * Math.PI);
mikeyEar1.fillStyle = "#B2E1EB";
mikeyEar1.fill();
mikeyEar1.lineWidth = 1;
mikeyEar1.strokeStyle = "#73959C";
mikeyEar1.stroke();

const mikeyEar2 = canvas.getContext("2d");
mikeyEar2.beginPath();
mikeyEar2.arc(287, 100, 50, 0, 2 * Math.PI);
mikeyEar2.fillStyle = "#B2E1EB";
mikeyEar2.fill();
mikeyEar2.lineWidth = 1;
mikeyEar2.strokeStyle = "#73959C";
mikeyEar2.stroke();