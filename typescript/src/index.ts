import { newRenderer } from "./renderer.js"
import { Rectangle} from "./shapes/rectangle.js";
import { Circle } from "./shapes/circle.js";
import { Square } from "./shapes/square.js";

const rectangle: Rectangle = new Rectangle(2, 3);
const recRenderer = newRenderer(rectangle);
recRenderer.draw();

const circle: Circle = new Circle(2);
const circleRenderer = newRenderer(circle);
circleRenderer.draw();


// index.ts
