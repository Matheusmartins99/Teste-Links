<template>
    <div>
        <div class="itens">
            <div class="presente">
                <img v-b-modal.meumodal src="@/assets/presente.svg" alt="presente">
                
            </div>
            <div class="icon"><img src="@/assets/cubo.svg" alt="cubo"></div>
            <div class="icon"><img src="@/assets/trofeu.svg" alt="trofeu"></div>
            <div class="icon"><img src="@/assets/usuario.svg" alt="usuario"></div>
            <div class="icon"><img src="@/assets/item.svg" alt="item"></div>
            
        </div>
         
         <div id="alinhamento">
             <b-modal  size="xl" id="meumodal" ok-only >
                        <div class="espaco">
                            <header>
                                 <div><img src="@/assets/titlle.svg" alt="título">
                                 <div class="text">
                                    <p>Crie seus links de redirect em poucos passos</p>
                                 </div>
                                 </div>
                                 <div><button v-b-toggle.sidebar-right id="btn">Criar um Link</button></div>
                                 <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
                                 </b-sidebar>
                            </header>
                        </div>
                        <div class="separacao">
                            <div class="linha" style="text-align: center;">
                                <div class="letra">
                                    <p>4 Links</p>
                                </div>
                                <div class="text-2">
                                    <p>Clique em temo real</p>
                                </div>
                            </div>
                            <div  style="text-align: center;">
                                <h1 >B</h1>
                            </div>
                        </div>
                    </b-modal>
         </div>
    </div>

</template>

<style scoped>



.itens{
    box-sizing: border-box;

position: absolute;
width: 98px;
height: 568px;
left: -0.26px;
top: 0.38px;

background: #FFFFFF;
border: 1px solid #EDEDF0;
}

.presente{
    margin: 60px auto 90px auto ;
}

.icon{
    margin: 60px auto;
}

.modal-titlle{
    margin-top: 0;
}

#btn{
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    border: none;
    background: rgba(33, 51, 210, 0.1);
    border-radius: 5px;
    letter-spacing: 0.2px;
    color: #2133D2;
    padding: 14px 50px;
}
#alinhamento{
    margin-left: auto;
    margin-right: auto;
}

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.separacao{
    margin-left: 20px;
    display: grid;
    grid-template-columns: 0.88fr 1fr;
    border-top: 1px solid #E5E5E5;
}

.letra{
    color :#2133D2 ;
    font-weight: 600;
    font-size: 20px;
    margin-left: 20px;
}

.text-2{
    color: #81858E;
    font-size: 14px;
    margin: 20px
}

.linha{
    margin-left: 15px;
    border-right: 1px solid #E5E5E5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E5E5E5;
}

.espaco{
    margin-bottom: 20px;
}

.text{
    color: #81858E;
    margin-top: 5px;
    margin-left: 23px;

}



</style>

<script>


export default{
    data() {
        return{
            
        }
    }
}
</script>
