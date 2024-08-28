document.addEventListener('DOMContentLoaded', () => {
    console.log = function(string) {
        const output = document.getElementById('output');
        string = "C:\\Programming\\Privat\\NeuralNetwork-Visualizer> " + string;
        const p = document.createElement('p');
        p.innerHTML = string;
        output.appendChild(p);
    };

    console.log('Hello World!');
    
    console.log('Loading Neural Network Visualizer...');

    console.log('Loading Neural Network Visualizer... Done!');
});