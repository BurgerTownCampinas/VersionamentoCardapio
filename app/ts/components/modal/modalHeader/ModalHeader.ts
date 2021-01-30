namespace ModalHeader{
    export class ModalHeader{
        
        view(): string{
            return `
            <div class="modal-header">
                <button type="button" 
                    class="close" 
                    data-dismiss="modal" 
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            `;
        }
    }
}