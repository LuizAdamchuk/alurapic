<template>
    <div>
        <button @click="disparaAcao()" :class="estiloDoBotao" :type="tipo"> {{ rotulo }} </button>
    </div>
</template>

<script>
    export default {
        // Validando as propriedade que serao passadas antes recebia:
        // props: {['tipo', 'rotulo', 'confirmacao', 'estilo']}
        // agora validando cada propriedade fica dessa maneira, colocando as cacarcateristicas
        // em cada uma tornando as mensagens de erros mais claras para o desenvolvedor indicando 
        // precisamente o problema.
        props: {
            tipo: {
                required: true,
                type: String
            },
            rotulo: {
                requirde: true,
                type: String
            },
            confirmacao: Boolean,
            estilo:String, 
        },

        methods: {
            disparaAcao() {
                if (this.confirmacao) {
                    if (confirm("Confirma operação?")) {
                        this.$emit('botaoAtivado');
                    }
                    return;
                }
                this.$emit('botaoAtivado');

            }
        },
        computed: {
            estiloDoBotao() {
                if(this.estilo == 'padrao' || !this.estilo) return 'botao botao-padrao';
                if (this.estilo == 'perigo') return 'botao botao-perigo';
            }
        }
        
    }
    
</script>

<style  scoped>
.botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }

</style>