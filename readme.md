## Actualizar versiones de react y react dom

```
npm install react@latest react-dom@latest
```

Para este ejemplo, se va a utilizar entityFramework  
Se deben instalar los siguentes paquetes desde el Administrador de NuGet-s

```
Microsoft.EntityFrameworkCore.SqlServer
Microsoft.EntityFrameworkCore.Tools
```

Configuracion de EntityFrameworkSql dentro de la carpeta Models

Comando Entity Framework:
```
Scaffold-DbContext "Server=(local); DataBase=(basedatos);Integrated Security=true" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models

Scaffold-DbContext "Server=ANDROMEDA\SQL01_17; DataBase=ToDo; User ID=sa; Password=SFd2220175; Integrated Security=true; Encrypt=false;" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models
```
Scaffold-DbContext "Server=ANDROMEDA; DataBase=SQL01_17\ToDo; User ID=sa; Password=SFd2220175; Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models


### Trabajando en el dise;o
En el archivo App.js
Importar el recurso de bootstrap, el cual es instalado al crear el proyecto
import 'bootstrap/dist/css/bootstrap.min.css'

