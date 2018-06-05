
const plantillas = {
	"PM":`<h3>Plantilla Multimedia</h3>
            		<div class="generic">
            			<div id="bodycontent">
            				<label>
            					URL imagen o video
            					<input type="text" id="img">
            				</label>
            			</div>
            		</div>`,
	"PG":`<h3>Plantilla Generica</h3>
            		<div class="generic">
            			<div id="bodycontent">
            				<label>
            					URL imagen
            					<input type="text" id="img">
            				</label>
            				<label>
            					Titulo
            					<input type="text" id="title">
            				</label>
            				<label>
            					SubTitulo <input type="text" id="subtitle">
            				</label>
            			</div>
            			<div id="botoncontent">
            				<label>
            					Botón Web <input type="text" class="btn_web">
            				</label>
							<div id="baseBtn" onclick="modalToggle()"><div>
								<img src="https://images.emojiterra.com/mozilla/512px/2795.png"> Agregar Botones
							</div></div>
						</div>
            		</div>`,
	"PB":`<h3>Plantilla Botones</h3>
            		<div class="generic">
            			<div id="bodycontent">
            				<label>
            					Texto
            					<input type="text" id="texto">
            				</label>
            			</div>
            			<div id="botoncontent">
            				<label>
            					Botón Web <input type="text" class="btn_web">
            				</label>
							<div id="baseBtn" onclick="modalToggle()"><div>
								<img src="https://images.emojiterra.com/mozilla/512px/2795.png"> Agregar Botones
							</div></div>
						</div>
            		</div>`,
	"M":`<h3>Mensaje</h3>
            		<div class="generic">
            			<div id="bodycontent">
            				<label>
            					Texto
            					<input type="text" id="texto">
            				</label>
            			</div>
            		</div>`,
}

