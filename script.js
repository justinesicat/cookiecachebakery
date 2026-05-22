function runSimulation() {
    
    const referenceInput = document.getElementById('referenceString').value;

    if (!referenceInput.trim()) {
        alert("Please enter a cookie order queue.");
        return;
    }
    
    const frameInput = document.getElementById('frameCount').value;
    const framesCount = Number(frameInput);
        if (
            frameInput.trim() === "" ||
            isNaN(framesCount) ||
            !Number.isInteger(framesCount) ||
            framesCount <= 0
            ) {
            alert("No. of Frames must be a positive whole number.");
            return;
        }

    const algorithm = document.getElementById('algorithm').value;

        const references = referenceInput
        .trim()
        .split(/[\s,]+/)
        .map(Number);

        if (references.some(x => !Number.isInteger(x))) {
            alert("Only whole numbers are allowed.");
            return;
        }

        let frames = [];
        let queue = [];
        let faults = 0;
        let hits = 0;

        const tbody = document.getElementById('simulationBody');
        tbody.innerHTML = '';

        references.forEach((page, index) => {
            let isHit = frames.includes(page);

            let changedPage = page;
            let replacedPage = null;

        if (isHit) {
            hits++;

            if (algorithm === 'LRU') {
                queue = queue.filter(item => item !== page);
                queue.push(page);
            }
        } else {
            faults++;

            if (frames.length < framesCount) {
                frames.push(page);
                queue.push(page);
            } else {

                let pageToRemove;

                if (algorithm === 'FIFO') {
                    pageToRemove = queue.shift();
                }

                else if (algorithm === 'LRU') {
                    pageToRemove = queue.shift();
                }

                else if (algorithm === 'OPTIMAL') {
                    let farthestIndex = -1;
                    let replacePage = null;

                    frames.forEach(frame => {
                        let futureIndex = references
                            .slice(index + 1)
                            .indexOf(frame);

                        if (futureIndex === -1) {
                            replacePage = frame;
                            farthestIndex = Infinity;
                        }

                        if (futureIndex > farthestIndex) {
                            farthestIndex = futureIndex;
                            replacePage = frame;
                        }
                    });

                    pageToRemove = replacePage;
                }

                replacedPage = pageToRemove;

                const removeIndex = frames.indexOf(pageToRemove);
                frames[removeIndex] = page;

                if (algorithm !== 'OPTIMAL') {
                    queue.push(page);
                }
            }
        }

            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${index + 1}</td>

            <td>
                <div class="frame-cookie">🍪 ${page}</div>
            </td>

            <td>
                ${frames.map(frame => {

                    let className = "frame-cookie";

                    if (!isHit && frame === changedPage) {
                        className += " added";
                    }

                    if (frame === replacedPage) {
                        className += " removed";
                    }

                    return `<div class="${className}">🍪 ${frame}</div>`;
                }).join('')}
            </td>

            <td class="${isHit ? 'hit' : 'fault'}">
                ${isHit ? 'HIT' : 'FAULT'}
            </td>
            `;

            tbody.appendChild(row);
        });

    if (!referenceInput.trim()) {
        alert("Please enter a cookie order queue 🍪");
        return;
    }

    if (framesCount <= 0) {
        alert("Oven slots must be greater than 0");
        return;
    }

    document.getElementById('faults').textContent = faults;
    document.getElementById('hits').textContent = hits;

    const hitRatio = references.length > 0 ? (hits / references.length) : 0;
    document.getElementById('ratio').textContent =
    (hitRatio * 100).toFixed(2) + '%';

    document.getElementById('total').textContent = references.length;
}

function generateRandom() {
    const length = 8;
    const maxPage = 9;

    const random = Array.from({ length }, () =>
        Math.floor(Math.random() * maxPage)
    );

    document.getElementById('referenceString').value = random.join(', ');
}

function resetSimulation() {
    document.getElementById('referenceString').value = '7,0,1,2,0,3,0,4';
    document.getElementById('frameCount').value = 3;
    document.getElementById('algorithm').value = 'FIFO';

    document.getElementById('faults').textContent = '0';
    document.getElementById('hits').textContent = '0';

    document.getElementById('simulationBody').innerHTML = `
        <tr>
        <td colspan="4">Run a simulation to start baking 🍪</td>
        </tr>
    `;
}